// Reusable toggling function
function handleToggle (id) {
    const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

// Toggleing All Button
// Add money btn
document.getElementById('add-money-btn').addEventListener('click', function() {
    handleToggle('add-money-parent');
});

// cash-out-btn 
document.getElementById('cash-out-btn').addEventListener('click', function () {
    handleToggle('cash-out-parent');
})

// Transfer Money
document.getElementById('transfer-money-btn').addEventListener('click', function () {
    handleToggle('transfer-money-parent');
})

// Get Bonus
document.getElementById('get-bonus-btn').addEventListener('click', function () {
    handleToggle('get-bonus-parent');
})

// Pay Bill
document.getElementById('pay-bill-btn').addEventListener('click', function () {
    handleToggle('pay-bill-parent');
})

// Transactions
document.getElementById('transaction-btn').addEventListener('click', function () {
    handleToggle('transaction-history-parent');
})


