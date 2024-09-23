let loginForm = document.forms['login-form'];
let userData;

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == 200) {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("../Data/userData.json", function(text) {
    userData = JSON.parse(text);
});

function loginValidation() {
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    if (!userData) {
        alert("User data is not available yet. Please try again.");
        return false;
    }

    if (email !== userData.email) {
        alert('Wrong E-mail :(');
        return false;
    }
    if (password !== userData.password) {
        alert('Wrong Password :(');
        return false;
    }
    sessionStorage.setItem("login",true);
    sessionStorage.setItem("user-name", userData["fName"]);
    alert('Login successful!');
    return true;
}


loginForm['email'].addEventListener('input', function() {
    const emailValue = this.value;
    localStorage.setItem('savedEmail', emailValue);
});
window.onload = function() {
    const savedEmail = localStorage.getItem('savedEmail');
    if (savedEmail) {
        loginForm['email'].value = savedEmail;
    }
};


loginForm.onsubmit = function(event) {
    event.preventDefault();

    let isValid = loginValidation();
    if (isValid) {
        loginForm.submit();
    } else {
        return false;
    }
};
