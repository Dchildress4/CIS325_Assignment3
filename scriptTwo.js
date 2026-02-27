const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event){
    event.preventDefault();

    let isValid = true;

    const firstName = document.getElementById('first_name').value;

    if(firstName.length < 2){
        alert('First name must be at least 2 characters long');
        isValid = false;
    }

    const lastName = document.getElementById('last_name').value;

    if(lastName.length < 2){
        alert('Last name must be at least 2 characters long');
        isValid = false;
    }

    const email = document.getElementById('email').value;
    const email_pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email_pattern.test(email)){
        alert('Invalid email format.');
        isValid = false;
    }

    const password = document.getElementById('password').value;
    const password_pattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(!password_pattern.test(password)){
        alert('Password must be at least 8 character long, contain an upper case letter, and a number.');
        isValid = false;
    }

    const confirm_password = document.getElementById('confirm_password').value;

    if(confirm_password != password){
        alert('Passwords must match.');
        isValid = false;
    }

    const ageValue = document.getElementById('age').value;

    if(ageValue != ""){
        const age = parseInt(ageValue);
        if(isNaN(age) || age < 18 || age > 100){
            alert('Age is invalid. Must be between 18 and 100.');
            isValid = false;
        }
    }

    const phone = document.getElementById('phone').value;
    const phone_format = /^\d{3}-\d{3}-\d{4}$/;;

    if(phone != "" && !phone_format.test(phone)){
        alert('Please enter a valid number in the format XXX-XXX-XXXX');
        isValid = false;
    }

    if(isValid){
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        if (ageValue !== "") {
            formData.age = parseInt(ageValue);
        }

        if (phone !== "") {
            formData.phoneNumber = phone;
        }

        console.log(formData);
        alert('Form submitted');
    }
})