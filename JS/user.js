'use strict'

function lvlPush() {
    let lvlNum = localStorage.getItem('lvlNum') ? parseInt(localStorage.getItem('lvlNum')) : 0;
    let lvlProgress = localStorage.getItem('lvlProgress') ? parseInt(localStorage.getItem('lvlProgress')) : 0;

    lvlProgress += Math.floor(Math.random() * 71);

    if (lvlProgress >= 100) {
        lvlProgress = 0;
        lvlNum += 1;
    }
    
    localStorage.setItem('lvlNum', lvlNum);
    localStorage.setItem('lvlProgress', lvlProgress);

    window.location.href = 'profile.html';
}