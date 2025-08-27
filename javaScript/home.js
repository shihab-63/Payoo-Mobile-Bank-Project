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

// Function to get Input Integer Number
function getInputValueNumber (id) {
    const inputFiled = document.getElementById(id);
    const inputFiledValue = inputFiled.value;
    const inputFieldValueNumber = parseInt(inputFiledValue);
    return inputFieldValueNumber;
}

// Function to get Input Value
function getInputValue (id) {
    const inputElement = document.getElementById(id);
    const inputValue = inputElement.value;
    return inputValue;
}

// Function to Get Available Balance
function getAvailableBalance (id) {
    const availableBanalceElement = document.getElementById(id);
    const availableBanalce = availableBanalceElement.innerText;
    return availableBanalce;
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

// Global Variable
const pin = 1234;


// Add Money All funtionality
document.getElementById('add-money-login-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // All Input Value
    const selectABank = getInputValue('select-a-bank');
    const bankAccountNumber = getInputValue('bank-account-number');
    const amountToAdd = getInputValueNumber('amount-to-add');
    const pinNumber = getInputValueNumber('pin-number');

    // Available Banalce value ParseInt
    const availableBanalce = parseInt(document.getElementById('available-balance').innerText);

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
     alert(`✅Congratulations! Sucessfully add money of ${amountToAdd}.`);
})


// Cash Out All Funtionality
document.getElementById('withdraw-money-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const agentNumber = getInputValue('agent-number');
    const amount = getInputValueNumber('amount');
    const pinNumber = getInputValueNumber('pin-number2');

    // Available Balance
    const availableBanalce = getAvailableBalance('available-balance');

    // Condition 
    if (agentNumber.length !== 11) {
        return alert('⚠️Please Provide Vaild Agent Number')
    }else if (isNaN(amount) || amount <= 0){
        return alert('⚠️Please enter a valid amount that is greater than zero.')
    }else if (pinNumber !== pin) {
        return alert("⚠️Please Provide Vaild Pin Number")
    }else {
        const totalCashOut = availableBanalce - amount;
        document.getElementById('available-balance').innerText = totalCashOut
    }

    // All inputField Free
    document.getElementById('agent-number').value = "";
    document.getElementById('amount').value = "";
    document.getElementById('pin-number2').value = "";
    alert(`✅Congratulations! Sucessfully cash out of ${amount}.`);
})

// Transfer Money All Funtionality
document.getElementById('send-now-btn').addEventListener('click', function (e) {
    e.preventDefault();
    // All Input Field Value
    const userAccountNumber = getInputValue('user-account-number');
    const amount2 = getInputValueNumber('amount2');
    const pinNumber3 = getInputValueNumber('pin-number3');

    // Available Balance
    const availableBanalce = getAvailableBalance('available-balance');
    
    // Condition
    if (userAccountNumber.length !== 11) {
        return alert('⚠️Please Provite Valid User Account Number');
    }else if (isNaN(amount2) || amount2 <= 0) {
        return alert('⚠️Please enter a valid amount that is greater than zero.');
    }else if (pinNumber3 !== pin) {
        return alert('⚠️Please Provide Vaild Pin Number')
    }else if(amount2 > availableBanalce) {
        return alert('⚠️Insufficient Balance!');
    }else {
        const totalTransferMoney = availableBanalce - amount2;
        document.getElementById('available-balance').innerText = totalTransferMoney;
    }
    
    // All inputField Free
    document.getElementById('user-account-number').value = '';
    document.getElementById('amount2').value = '';
    document.getElementById('pin-number3').value = '';
    alert(`✅Congratulations! Sucessfully transfer money of ${amount2}.`);
})

// Get Bonus All funtionality
document.getElementById('get-bonus-btn2').addEventListener('click', function (e){
    e.preventDefault();
    const couponCode = 'BONUS100';
    const bonus = 100;
    const interBonusCoupon = getInputValue('inter-bonus-coupon').toUpperCase();
    
    // Condition
    if (interBonusCoupon === ''){
        return alert('Please enter a coupon code.')
    }else if (interBonusCoupon === couponCode) {
        const availableBanalce = parseInt(getAvailableBalance('available-balance'));
        const sumBonus = availableBanalce + bonus;
        document.getElementById('available-balance').innerText = sumBonus;
        alert(`✅Congratulations! You have received a bonus of ${bonus}.`);
    }
    
})

// Pay Bill All funtionality
document.getElementById('pay-now-btn').addEventListener('click', function(e){
    e.preventDefault();
    const selectToPay = getInputValue('select-to-pay');
    const bankAccountNumber2 = getInputValue('bank-account-number2');
    const amountToPay = getInputValueNumber('amount-to-pay');
    const pinNumber4 = getInputValueNumber('pin-number4');

    const availableBanalce = parseInt(getAvailableBalance('available-balance'));

    // Condition
    if (selectToPay === ''){
        return alert('⚠️Please Select A Bank Account');
    }else if (bankAccountNumber2.length !== 11){
        return alert('⚠️Please Provide Vaild Bank Account Number')
    }else if (isNaN(amountToPay) || amountToPay <= 0) {
        return alert('⚠️Please enter a valid amount that is greater than zero.');
    }else if(pinNumber4 !== pin) {
        return alert ('⚠️Please Provide Vaild Pin Number');
    }else if (amountToPay > availableBanalce){
        return alert('⚠️Insufficient Balance!');
    }else {
        const totalPayBill = availableBanalce - amountToPay;
        document.getElementById('available-balance').innerText = totalPayBill;
        // Clean Input Fields
        document.getElementById('select-to-pay').value = '';
        document.getElementById('bank-account-number2').value = '';
        document.getElementById('amount-to-pay').value = '';
        document.getElementById('pin-number4').value = '';
        alert(`✅Congratulations! Sucessfully pay bill of ${amountToPay}.`);
    }
    
})
