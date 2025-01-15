document.addEventListener("DOMContentLoaded", () => {
    const transactions = [
        {
            date: "July 5, 2024",
            time: "10:00 PM",
            transactionId: "0xabc123…789def",
            description: "Token Transfer",
            token: "ETH",
            amount: "-100 USDT",
            gasFee: "$5.50",
            status: "Pending",
            statusClass: "text-bg-danger"
        },
        {
            date: "July 2, 2024",
            time: "10:42 AM",
            transactionId: "0x123def…789abc",
            description: "NFT Purchase",
            token: "WETH",
            amount: "-0.15 ETH",
            gasFee: "$2.00",
            status: "Success",
            statusClass: "text-bg-success"
        },
        {
            date: "June 28, 2023",
            time: "8:20 PM",
            transactionId: "0x123456…789abc",
            description: "Smart Contract Call",
            token: "USDT",
            amount: "+$500 USDT",
            gasFee: "$1.20",
            status: "Success",
            statusClass: "text-bg-success"
        },
        {
            date: "June 24, 2023",
            time: "10:48 PM",
            transactionId: "0x789abc…123def",
            description: "Token Transfer",
            token: "ETH",
            amount: "-0.10 ETH",
            gasFee: "$3.00",
            status: "Cancelled",
            statusClass: "text-bg-dark"
        },
        {
            date: "June 12, 2023",
            time: "12:30 AM",
            transactionId: "0x456def…789abc",
            description: "NFT Minting",
            token: "DAI",
            amount: "+50 DAI",
            gasFee: "$4.00",
            status: "Success",
            statusClass: "text-bg-success"
        },
        {
            date: "May 31, 2023",
            time: "2:40 PM",
            transactionId: "0x123abc…456def",
            description: "Token Swap",
            token: "USDC",
            amount: "+1000 USDC",
            gasFee: "$5.00",
            status: "Success",
            statusClass: "text-bg-success"
        },
        {
            date: "May 22, 2023",
            time: "8:50 AM",
            transactionId: "0x789def…123abc",
            description: "Contract Deployment",
            token: "ETH",
            amount: "+0.2 ETH",
            gasFee: "$4.00",
            status: "Success",
            statusClass: "text-bg-success"
        },
        {
            date: "May 20, 2023",
            time: "6:45 PM",
            transactionId: "0x456abc…234def",
            description: "Staking Reward",
            token: "ETH",
            amount: "+0.02 ETH",
            gasFee: "-",
            status: "Success",
            statusClass: "text-bg-success"
        },
        {
            date: "April 28, 2023",
            time: "11:20 AM",
            transactionId: "0x456abc…234def",
            description: "Token Transfer",
            token: "BTC",
            amount: "+0.05 BTC",
            gasFee: "$15.00",
            status: "Success",
            statusClass: "text-bg-success"
        },
        {
            date: "April 16, 2023",
            time: "11:00 PM",
            transactionId: "0xabc123…789def",
            description: "Token Transfer",
            token: "ETH",
            amount: "+100 USTD",
            gasFee: "$4.50",
            status: "Pending",
            statusClass: "text-bg-danger"
        }
    ];
    

    const tableBody = document.getElementById("transaction-table-body");

    transactions.forEach((transaction) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.time}</td>
            <td>${transaction.transactionId}</td>
            <td>${transaction.description}</td>
            <td>${transaction.token}</td>
            
            <td class="${transaction.amount.startsWith('-') ? 'text-danger' : 'text-success'}">${transaction.amount}</td>
            <td>${transaction.gasFee}</td>
            <td><span class="badge text-bg-${
                transaction.status === "Success" ? "success" : "danger"
            }">${transaction.status}</span></td>
        `;
        //<td>${transaction.amount}</td>
        tableBody.appendChild(row);
    });
});
