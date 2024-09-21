let signUpForm = document.forms['signUp-form'];
let userData = {
    fName: "",
    lName: "",
    phone: "",
    email:"",
    password:""
};


function sendDataToServer(url, data) {
    fetch(url, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json()) 
    .then(data => {
        return true;
    })
    .catch((error) => {
       return false;
    });
}



function signUpValidation() {
    const email = signUpForm['email'].value;
    const conf_email = signUpForm['confirm-email'].value;
    const password = signUpForm['password'].value;
    const conf_password = signUpForm['confirm-password'].value;
    const phone = signUpForm['phoneNo'].value;
    const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    const passPattern =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    
    if(!phonePattern.test(phone)){
        alert('Wrong Phone Number :(');
        return false;
    }
    if (email !== conf_email) {
        alert('Wrong E-mail :(');
        return false;
    }
    if(!passPattern.test(password)){
        alert("Write a stronger password.")
        return false
    }
    if (password !== conf_password) {
        alert('Wrong Password :(');
        return false;
    }

    // if(sendDataToServer('https://retoolapi.dev/4IMQ2g/data', userData)){
    //     alert("New user created successfuly!");
    //     return true;
    // }else{
    //     alert("Error Occured :(");
    //     return false;
    // }

    return true
   
}

signUpForm.onsubmit = function(event) {
    event.preventDefault();

    let isValid = signUpValidation();
    if (isValid) {
        signUpForm.submit();
    } else {
        return false;
    }
};
