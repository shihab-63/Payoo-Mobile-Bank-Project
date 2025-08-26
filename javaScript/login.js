// Login button Javascript Here
document.getElementById('login-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // Fixed Mobile & Pin Number
    const mobileNumber = '01300000000';
    const pinNumber = '1234';

    // input Value
    const mobileNumberInput = document.getElementById('mobile-number-input').value;
    const pinNumberInput = document.getElementById('four-digit-pin-input').value;
    
    // Condition here
    if (mobileNumberInput !== mobileNumber) {
        return alert('Provdte Valid Mobile Number❌');
    }else if (pinNumberInput !== pinNumber) {
        return alert('Provdte Valid Pin Number❌');
    }else {
        return window.location.href = './home.html';
    }
})