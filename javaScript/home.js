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

// Function to get Input value
function getInputValueNumber (id) {
    const inputFiled = document.getElementById(id);
    const inputFiledValue = inputFiled.value;
    const inputFieldValueNumber = parseInt(inputFiledValue);
    return inputFieldValueNumber;
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



// Add Money All ingredient
document.getElementById('add-money-login-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // All Input Value
    const selectABank = document.getElementById('select-a-bank').value;
    const bankAccountNumber = document.getElementById('bank-account-number').value;
    const amountToAdd = getInputValueNumber('amount-to-add');
    const pinNumber = getInputValueNumber('pin-number');

    // Available Banalce value ParseInt
    const availableBanalce = parseInt(document.getElementById('available-balance').innerText);

    const pin = 1234;
    // Condition 
    if (selectABank === "") {
        return alert('Please Select A Bank Account⚠️');
    }else if (bankAccountNumber.length !== 11) {
        return alert('Please Provide Vaild Bank Account Number⚠️')
    }else if (isNaN(amountToAdd) || amountToAdd <= 0) {
        return alert('Please enter a valid amount that is greater than zero.');
    }else if (pinNumber !== pin) {
        return alert ('Please Provide Vaild Pin Number⚠️');
    }else {
        const totalAddMoney = amountToAdd + availableBanalce;
        document.getElementById('available-balance').innerText = totalAddMoney;
    }
    
    // Input Value Free
    document.getElementById('select-a-bank').value = "";
    document.getElementById('bank-account-number').value = "";
    document.getElementById('amount-to-add').value = "";
    document.getElementById('pin-number').value = "";
    
})

