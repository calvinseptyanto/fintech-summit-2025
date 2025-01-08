from flask import Flask, request, jsonify
from web3 import Web3
import os
import requests
import pandas as pd
import pickle
import numpy as np

app = Flask(__name__)

# Replace with your Ethereum node provider URL
# You can use services like Infura, Alchemy, or run your own node
INFURA_URL = os.getenv("INFURA_URL")
ETHERSCAN_API_KEY = os.getenv("ETHERSCAN_API_KEY")

# Initialize Web3
w3 = Web3(Web3.HTTPProvider(INFURA_URL))

# Load the fraud detection model
with open('XGB_fraud.pickle', 'rb') as model_file:
    fraud_model = pickle.load(model_file)


def compute_features(transactions, token_transactions, address):
    transactions['timeStamp'] = pd.to_datetime(
        transactions['timeStamp'], unit='s')
    transactions = transactions.sort_values('timeStamp')

    sent_tnx = transactions[transactions['from'].str.lower()
                            == address.lower()]
    received_tnx = transactions[transactions['to'].str.lower(
    ) == address.lower()]

    if len(sent_tnx) > 1:
        sent_diff = sent_tnx.sort_values(
            'timeStamp')['timeStamp'].diff().dropna().dt.total_seconds() / 60
        avg_min_between_sent_tnx = sent_diff.mean()
    else:
        avg_min_between_sent_tnx = 0

    if len(received_tnx) > 1:
        received_diff = received_tnx.sort_values(
            'timeStamp')['timeStamp'].diff().dropna().dt.total_seconds() / 60
        avg_min_between_received_tnx = received_diff.mean()
    else:
        avg_min_between_received_tnx = 0

    if not transactions.empty:
        time_diff = (transactions['timeStamp'].iloc[-1] -
                     transactions['timeStamp'].iloc[0]).total_seconds() / 60
    else:
        time_diff = 0

    num_sent_tnx = len(sent_tnx)
    num_received_tnx = len(received_tnx)

    num_created_contracts = len(transactions[transactions['to'] == ""])

    if not received_tnx.empty:
        max_val_received = received_tnx['value'].astype(float).max()
        avg_val_received = received_tnx['value'].astype(float).mean()
    else:
        max_val_received = 0
        avg_val_received = 0

    if not sent_tnx.empty:
        avg_val_sent = sent_tnx['value'].astype(float).mean()
    else:
        avg_val_sent = 0

    total_ether_sent = sent_tnx['value'].astype(float).sum()
    total_ether_balance = received_tnx['value'].astype(
        float).sum() - total_ether_sent

    # ERC20 Features
    erc20_received = token_transactions[token_transactions['to'].str.lower(
    ) == address.lower()]
    erc20_total_ether_received = erc20_received['value'].astype(float).sum()
    erc20_total_ether_sent = token_transactions[token_transactions['from'].str.lower(
    ) == address.lower()]['value'].astype(float).sum()
    erc20_total_ether_sent_contract = token_transactions[token_transactions['from'].str.lower(
    ) == address.lower()]['contractAddress'].nunique()
    erc20_uniq_sent_addr = token_transactions[token_transactions['from'].str.lower(
    ) == address.lower()]['to'].nunique()
    erc20_uniq_rec_token_name = token_transactions['tokenName'].nunique()

    features = {
        'Avg min between sent tnx': avg_min_between_sent_tnx,
        'Avg min between received tnx': avg_min_between_received_tnx,
        'Time Diff between first and last (Mins)': time_diff,
        'Sent tnx': num_sent_tnx,
        'Received Tnx': num_received_tnx,
        'Number of Created Contracts': num_created_contracts,
        'max value received ': max_val_received,
        'avg val received': avg_val_received,
        'avg val sent': avg_val_sent,
        'total Ether sent': total_ether_sent,
        'total ether balance': total_ether_balance,
        ' ERC20 total Ether received': erc20_total_ether_received,
        ' ERC20 total ether sent': erc20_total_ether_sent,
        ' ERC20 total Ether sent contract': erc20_total_ether_sent_contract,
        ' ERC20 uniq sent addr': erc20_uniq_sent_addr,
        ' ERC20 uniq rec token name': erc20_uniq_rec_token_name
    }

    return features


@app.route('/')
def index():
    return "Crypto Wallet Transaction Extraction API"


@app.route('/get_transactions', methods=['GET'])
def get_transactions():
    address = request.args.get('address')
    if not address:
        return jsonify({'error': 'Address parameter is required'}), 400

    # Validate Ethereum address
    if not w3.is_address(address):
        return jsonify({'error': 'Invalid Ethereum address'}), 400

    # Etherscan API endpoint for normal transactions
    etherscan_url = (
        f"https://api.etherscan.io/api"
        f"?module=account&action=txlist"
        f"&address={address}"
        f"&startblock=0&endblock=99999999&sort=asc"
        f"&apikey={ETHERSCAN_API_KEY}"
    )

    # Etherscan API endpoint for ERC20 token transactions
    token_url = (
        f"https://api.etherscan.io/api"
        f"?module=account&action=tokentx"
        f"&address={address}"
        f"&startblock=0&endblock=99999999&sort=asc"
        f"&apikey={ETHERSCAN_API_KEY}"
    )

    try:
        response = requests.get(etherscan_url, timeout=10)
        response.raise_for_status()
        token_response = requests.get(token_url, timeout=10)
        token_response.raise_for_status()
    except requests.exceptions.RequestException as e:
        return jsonify({'error': 'Failed to fetch transactions', 'message': str(e)}), 500

    data = response.json()
    token_data = token_response.json()

    if data['status'] != '1':
        return jsonify({'error': 'Failed to fetch transactions', 'message': data.get('message', 'Unknown error')}), 500

    if token_data['status'] != '1' and token_data['message'] != 'No transactions found':
        return jsonify({'error': 'Failed to fetch token transactions', 'message': token_data.get('message', 'Unknown error')}), 500

    transactions = data.get('result', [])
    token_transactions = token_data.get('result', [])

    transactions_df = pd.DataFrame(transactions)
    token_transactions_df = pd.DataFrame(token_transactions)

    required_columns = [
        'blockHash', 'blockNumber', 'confirmations', 'contractAddress', 'cumulativeGasUsed',
        'from', 'functionName', 'gas', 'gasPrice', 'gasUsed', 'hash', 'input',
        'isError', 'methodId', 'nonce', 'timeStamp', 'to', 'transactionIndex',
        'txreceipt_status', 'value'
    ]
    missing_columns = set(required_columns) - set(transactions_df.columns)
    if missing_columns:
        return jsonify({'error': f'Missing columns in transaction data: {missing_columns}'}), 500

    if not token_transactions_df.empty:
        token_transactions_df.rename(
            columns={'tokenName': 'tokenName'}, inplace=True)
    else:
        token_transactions_df = pd.DataFrame(columns=['tokenName'])

    try:
        features = compute_features(
            transactions_df, token_transactions_df, address)
    except Exception as e:
        return jsonify({'error': 'Error in feature computation', 'message': str(e)}), 500

    feature_df = pd.DataFrame([features])
    feature_df.replace([np.inf, -np.inf], np.nan, inplace=True)
    feature_df.fillna(0, inplace=True)

    try:
        prediction = fraud_model.predict(feature_df)
        prediction_proba = fraud_model.predict_proba(feature_df)[:, 1]
    except Exception as e:
        return jsonify({'error': 'Error during prediction', 'message': str(e)}), 500

    response_data = {
        'address': address,
        'transactions': transactions,
        'token_transactions': token_transactions,
        'fraud_prediction': int(prediction[0]),
        'fraud_probability': float(prediction_proba[0]),
        'features': features
    }

    return jsonify(response_data)


if __name__ == '__main__':
    app.run(debug=True)
