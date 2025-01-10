# Credify

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Descriptions](#file-descriptions)

## Features

- **Fraud Detection**: Utilizes an XGBoost model to predict fraudulent Ethereum transactions.
- **Transaction Retrieval**: Fetches transaction data for any Ethereum address using the Etherscan API.
- **Explainable AI**: Provides insights and explanations for each prediction to ensure transparency.
- **User Authentication**: Secure login and registration system for users.
- **Comprehensive Dashboard**: Offers an overview of companies connected with Northern Trust, including trust scores, past crypto transactions, company information, and privacy notices.

## Technologies Used

- **Backend**: Python, Flask, XGBoost, Etherscan API, INFURA API
- **Frontend**: React.js
- **Machine Learning**: XGBoost, Explainable AI
- **Data Analysis**: Jupyter Notebook

## File Descriptions

- **`XGB_fraud.pickle`**: The pre-trained XGBoost model used for predicting fraudulent Ethereum transactions.
- **`app.py`**: Flask backend application that hosts the `/get_transactions` endpoint. It integrates with Etherscan to retrieve transaction data and uses the XGBoost model for predictions, along with explainable AI features.
- **`fraud-detection-ethereum-transactions.ipynb`**: Jupyter Notebook containing the code and processes used to train the XGBoost model for fraud detection.
- **`src/`**: Contains the React frontend application, including:
  - **Authentication Components**: Login and registration pages.
  - **Dashboard**: Displays company overviews (e.g., trust scores), past crypto transactions, company information, and privacy notices for companies connected with Northern Trust.

