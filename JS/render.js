'use strict'

const containerCourse = document.getElementById('catalog-list');

const courseArray = [
    {
        id: 1,
        name: 'JavaScript',
        author: 'Алексей шпак',
        img: 'IMAGES/js-course.jpg',
        progress: 45,
        category: 'Frontend',
        isNew: true,
        link: 'course.html'
    },
    {
        id: 2,
        name: 'Python',
        author: 'Никита Мацюк',
        img: 'IMAGES/python.jpg',
        progress: 60,
        category: 'Beckend',
        isNew: false,
        link: 'development-python.html'
    },
    {
        id: 3,
        name: 'Java',
        author: 'Дмитрий Дубов',
        img: 'IMAGES/java.jpg',
        progress: 75,
        category: 'Backend',
        isNew: true,
        link: 'development-java.html'
    },
    {
        id: 4,
        name: 'SQL',
        author: 'Максим Колмыков',
        img: 'IMAGES/SQL.jpg',
        progress: 40,
        category: 'BD',
        isNew: false,
        link: 'development-SQL.html'
    },
    {
        id: 5,
        name: 'C#',
        author: 'Андрей Бойко',
        img: 'IMAGES/c.jpg',
        progress: 80,
        category: 'Backend',
        isNew: false,
        link: 'development-C.html'
    },
    {
        id: 6,
        name: 'PHP',
        author: 'Владимир Панасеня',
        img: 'IMAGES/php.jpg',
        progress: 45,
        category: 'Backend',
        isNew: false,
        link: 'development-php.html'
    },
    {
        id: 7,
        name: 'C++',
        author: 'Андрей Бессмертрный',
        img: 'IMAGES/c++.jpg',
        progress: 80,
        category: 'Backend',
        isNew: false,
        link: 'development-C++.html'
    },
    {
        id: 8,
        name: 'html',
        author: 'Алексей Гагилёв',
        img: 'IMAGES/html.jpg',
        progress: 35,
        category: 'Frontend',
        isNew: true,
        link: 'development-html.html'
    },
]

function renderCourse(courseArray) {
    containerCourse.innerHTML = '';

    for (let i = 0; i < courseArray.length; i++) {
        const card = document.createElement('div');
        card.className = 'catalog-list-link';

        card.innerHTML =
            `
            <a item itemscope itemtype="https://schema.org/Course" href="${courseArray[i].link}" class="catalog-item">
                <h3 itemprop="name" class="catalog-item-title">${courseArray[i].name}</h3>
                <img itemprop="image" src="${courseArray[i].img}" alt="курс по программированию"
                    style="width: 250px; min-height: 157.4px; border-radius: 25px;" class="catalog-item-img">
                <p itemprop="author" class="author">${courseArray[i].author}</p>
                <progress class="complexity" value="${courseArray[i].progress}" max="100"></progress>
                <p class="complexity-text">сложность</p>
            </a>
        `;
        containerCourse.appendChild(card);
    }
}

renderCourse(courseArray);

function allCourse() {
    containerCourse.innerHTML = '';

    for (let i = 0; i < courseArray.length; i++) {
        const card = document.createElement('div');
        card.className = 'catalog-list-link';

        card.innerHTML =
            `
            <a item itemscope itemtype="https://schema.org/Course" href="${courseArray[i].link}" class="catalog-item">
                <h3 itemprop="name" class="catalog-item-title">${courseArray[i].name}</h3>
                <img itemprop="image" src="${courseArray[i].img}" alt="курс по программированию"
                    style="width: 250px; min-height: 157.4px; border-radius: 25px;" class="catalog-item-img">
                <p itemprop="author" class="author">${courseArray[i].author}</p>
                <progress class="complexity" value="${courseArray[i].progress}" max="100"></progress>
                <p class="complexity-text">сложность</p>
            </a>
        `;
        containerCourse.appendChild(card);
    }
}

function newCourse(courseArray) {
    containerCourse.innerHTML = '';

    for (let i = 0; i < courseArray.length; i++) {
        if (courseArray[i].isNew === true) {
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
}

function frontend(courseArray) {
    containerCourse.innerHTML = '';

    for (let i = 0; i < courseArray.length; i++) {
        if (courseArray[i].category === 'Frontend') {
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
}

function backend(courseArray) {
    containerCourse.innerHTML = '';

    for (let i = 0; i < courseArray.length; i++) {
        if (courseArray[i].category === 'Backend') {
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
}

function dataBase(courseArray) {
    containerCourse.innerHTML = '';

    for (let i = 0; i < courseArray.length; i++) {
        if (courseArray[i].category === 'BD') {
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
}

function trande(courseArray) {
    containerCourse.innerHTML = '';

    for (let i = 0; i < courseArray.length; i++) {
        if (courseArray[i].id % 2) {
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
}