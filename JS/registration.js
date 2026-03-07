'use strict'

const inputNickname = document.getElementById('nick');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

function showError(id, message) {
        document.getElementById(id).textContent = message;
}

function registration() {
    showError("nameError", "");
    let arrUsers = JSON.parse(localStorage.getItem('arrUsers')) || [];
    for (let i = 0; i < arrUsers.length; i++) {
        if (inputNickname.value === arrUsers[i].name) {
            showError("nameError", "Такой ник уже существует");
            return
        }
    }
    arrUsers.push({
        name: inputNickname.value,
        email: inputEmail.value,
        password: inputPassword.value,
    });
    localStorage.setItem('arrUsers', JSON.stringify(arrUsers));
    window.location.href = 'index.html';
}
