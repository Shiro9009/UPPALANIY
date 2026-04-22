'use strict'
const nick = document.getElementById('nick-user');
const userName = document.getElementById('userName');
const User = JSON.parse(localStorage.getItem('locationUser'));
console.log(User);

if (User !== null) {
    let localName = User[User.length - 1];
    userName.innerHTML = '';
    userName.innerHTML = `
        <a href="profile.html" class="profile-link">
            <h2 id = "userNickName" class="userNickName">${localName.name}</h2>
        </a>
    `;
    userName.style.margin = `0 0 0 15%`;
    if (window.location.pathname == 'course.html') {
        userName.style.margin = `0 0 0 0`;
    }
    nick.textContent = localName.name;
}
