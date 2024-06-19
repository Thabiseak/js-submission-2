function groupByType(transactions) {
    return transactions.reduce((grouped, transaction) => {
        const { type, amount } = transaction;
        if (!grouped[type]) {
            grouped[type] = [];
        }
        grouped[type].push({ type, amount });
        return grouped;
    }, {});
}

const transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 30 }
];

console.log(groupByType(transactions)); 
