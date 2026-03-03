'use strict'

function searchCourse () {
    const searchInput = document.getElementById('search');
    const searchText = searchInput.value.toLowerCase();
    containerCourse.innerHTML = '';

    for (let i = 0; i < courseArray.length; i++) {
        if (courseArray[i].name.toLowerCase().includes(searchText)) {
            const card = document.createElement('div');
            card.className = 'catalog-list-link';

            card.innerHTML =
                `
            <a href="${courseArray[i].link}" class="catalog-item">
                <h3 class="catalog-item-title">${courseArray[i].name}</h3>
                <img src="${courseArray[i].img}" alt="курс по программированию"
                    style="width: 250px; min-height: 157.4px; border-radius: 25px;" class="catalog-item-img">
                <p class="author">${courseArray[i].author}</p>
                <progress class="complexity" value="${courseArray[i].progress}" max="100"></progress>
                <p class="complexity-text">сложность</p>
            </a>
            `;
            containerCourse.appendChild(card);
        }
    }
    if (containerCourse.children.length === 0) {
        containerCourse.innerHTML = '<p class="no-results">Ничего не найдено</p>';
    }
}

function searchAndRedirect() {
    const searchInput = document.getElementById('search');
    const searchText = searchInput.value.trim().toLowerCase();
    
    if (searchText === '') {
        return;
    }

    localStorage.setItem('searchQuery', searchText);
    window.location.href = 'catalog.html';
}

function checkSavedSearch() {
    const savedQuery = localStorage.getItem('searchQuery');
    
    if (savedQuery) {
        const searchInput = document.getElementById('search');
        if (searchInput) {
            searchInput.value = savedQuery;
            searchCourse();
            localStorage.removeItem('searchQuery');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    
    if (searchInput) {
        searchInput.addEventListener('input', searchCourse);
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                if (!window.location.pathname.includes('catalog.html')) {
                    searchAndRedirect();
                }
            }
        });
    }
    checkSavedSearch();
})

//secret

const data = document.getElementById('data');

function secret() {
    data.innerHTML = '';
            data.innerHTML =
                `
            <h4 class="confidential-title">Конфиденциальные информация</h4>
                    <div class="df">
                        <div class="log-in-data">
                            <p class="log-in-data-text">Email: kotNaSharah@gmail.com</p>
                            <p class="log-in-data-text">Passwor: qwerty1534</p>
                        </div>
                        <div class="data-pay">
                            <p class="data-pay-text">Номер карты: 2552 1124 6677 0981</p>
                            <p class="data-pay-text">CVE: 931</p>
                        </div>
                    </div>
            `;
}