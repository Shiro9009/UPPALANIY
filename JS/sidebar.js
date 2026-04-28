'use strict'

function toggleSidebar() {
    const aside = document.getElementById('aside');
    const showBtn = document.getElementById('showSidebar');
    
    aside.classList.toggle('aside-hidden');
    
    if (aside.classList.contains('aside-hidden')) {
        showBtn.style.display = 'block';
    } else {
        showBtn.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleSidebar');
    const showBtn = document.getElementById('showSidebar');
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleSidebar);
    }
    
    if (showBtn) {
        showBtn.addEventListener('click', toggleSidebar);
    }
});