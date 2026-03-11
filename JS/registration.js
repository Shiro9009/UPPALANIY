'use strict'

const inputNickname = document.getElementById('nick');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function registration() {
    let arrUsers = JSON.parse(localStorage.getItem('arrUsers')) || [];
    for (let i = 0; i < arrUsers.length; i++) {
        if (inputNickname.value.toLowerCase() === arrUsers[i].name.toLowerCase()) {
            showError("nameError", "Такой ник уже существует");
            inputNickname.style.margin = '0 0 10px 0'; 
            return
        } else if (inputNickname.value === '') {
            showError("nameError", "Введите ник");
            inputNickname.style.margin = '0 0 10px 0'; 
            return
        }
    } 

    const checkingEmail = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');

    if (checkingEmail.test(inputEmail.value)) {

    } else if (inputEmail.value === '') {
        showError("emailError", "Введите почту");
        inputEmail.style.margin = '0 0 10px 0';
        return 
    } else {
        showError("emailError", "Неправильная почта");
        inputEmail.style.margin = '0 0 10px 0';
        return 
    }

    if (inputPassword.value.length < 6) {
        showError("passwordError", "В пароле меньше 6 символов");
        inputPassword.style.margin = '0 0 10px 0';
        return 
    } else if (inputPassword.value.length == '') {
        showError("passwordError", "Введите пароль");
        inputPassword.style.margin = '0 0 10px 0';
        return 
    }

    arrUsers.push({
        name: inputNickname.value,
        email: inputEmail.value,
        password: inputPassword.value,
    });
    localStorage.setItem('arrUsers', JSON.stringify(arrUsers));
    window.location.href = 'log-in.html';
}
