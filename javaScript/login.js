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
    if (mobileNumberInput === mobileNumber && pinNumberInput === pinNumber) {
        window.location.href = './home.html';
    }else (
        alert('Wrong Credential')
    )
})