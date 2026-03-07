'use strict'

const nick = document.getElementById('logNick');
const password = document.getElementById('logPassword');
const locationUser = [];
function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function logInChek() {
    const localArrUsers = JSON.parse(localStorage.getItem('arrUsers')) || [];
    for (let i = 0; i < localArrUsers.length; i++) {
        const userData = localArrUsers[i];
        if (nick.value === userData.name && password.value === userData.password) {
            locationUser.push({
                name: userData.name,
                password: userData.password,
            })
            localStorage.setItem('locationUser', JSON.stringify(locationUser));
            window.location.href = 'index.html';
        } else if (password.value !== userData.password) {
            showError('errorPassword', 'Не правильный пароль');
            password.style.margin = '0 0 10px 0';
            password.value = '';
            return
        }
    }   
    showError('errorNick', 'Не правильный ник');
    nick.style.margin = '0 0 10px 0';
    nick.value = '';
    return
}