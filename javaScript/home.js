// Reusable toggling function
function handleToggle (id) {
    const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

// Reusable Color Toggling
function colorToggling (id) {
    const colorBtns = document.getElementsByClassName('color-btn');
    for (const colorbtn of colorBtns) {
        colorbtn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
        colorbtn.classList.add('border-gray-300');
    }
    document.getElementById(id).classList.remove('border-gray-300');
    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
}



// Toggleing All Button
// Add money btn
document.getElementById('add-money-btn').addEventListener('click', function() {
    handleToggle('add-money-parent');
    colorToggling('add-money-btn');
});

// cash-out-btn 
document.getElementById('cash-out-btn').addEventListener('click', function () {
    handleToggle('cash-out-parent');
    colorToggling('cash-out-btn');
})

// Transfer Money
document.getElementById('transfer-money-btn').addEventListener('click', function () {
    handleToggle('transfer-money-parent');
    colorToggling('transfer-money-btn')
})

// Get Bonus
document.getElementById('get-bonus-btn').addEventListener('click', function () {
    handleToggle('get-bonus-parent');
    colorToggling('get-bonus-btn')
})

// Pay Bill
document.getElementById('pay-bill-btn').addEventListener('click', function () {
    handleToggle('pay-bill-parent');
    colorToggling('pay-bill-btn')
})

// Transactions
document.getElementById('transaction-btn').addEventListener('click', function () {
    handleToggle('transaction-history-parent');
    colorToggling('transaction-btn')
})


