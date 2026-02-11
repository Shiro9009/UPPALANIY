"use strict"

setTimeout(() => {
    const list = document.querySelector('.popular-author-list-scroll');
    const items = list.querySelectorAll('.popular-author-item');

    items.forEach(item => {
        const clone = item.cloneNode(true);
        list.appendChild(clone);
    });

    let pos = 0;
    const speed = 0.5;

    setInterval(() => {
        pos -= speed;

        if (items.length > 0) {
            const itemWidth = items[0].offsetWidth;
            if (Math.abs(pos) >= itemWidth * items.length) {
                pos = 0;
            }
        }

        list.style.transform = `translateX(${pos}px)`;
    }, 20);
}, 1000);


function changeContent(section) {
    const contentDiv = document.getElementById('swap');
    if (section === '1') {
        contentDiv.innerHTML = `<h2 class="name-chapter">ГЛАВА 1 познание JS</h2>
                <div class="mini-cintainer">
                    <h3 class="chapter-title">
                        Привет, будущий разработчик! Добро пожаловать на курс по JavaScript!
                    </h3>
                    <p class="text-course">
                        Вы когда-нибудь задумывались, как обычная веб-страница превращается в интерактивное приложение?
                        Как кнопки «лайкают», формы проверяют вашу почту, а в интернет-магазине обновляется корзина? Всё
                        это — магия, за которой стоит <b>JavaScript</b>
                        <br>
                        <br>
                        Если HTML — это скелет страницы, а CSS — её одежда, то <b>JavaScript</b> — это мозги и мускулы.
                        Это
                        язык, который оживляет статичный контент, заставляя его реагировать на ваши действия.
                    </p>
                    <ul class="course-list">
                        <b>Почему JS — это must-know?</b>
                        <li class="course-item">
                            <p class="cousre-item-text">Он везде: Фронтенд (браузер), бэкенд (Node.js), мобильные
                                приложения, десктоп.</p>
                        </li>
                        <li class="course-item">
                            <p class="cousre-item-tett">Он востребован: Один из самых популярных языков в мире по данным
                                всех рейтингов (Stack Overflow, GitHub).</p>
                        </li>
                        <li class="course-item">
                            <p class="cousre-item-text">Он дает свободу: Освоив JS, вы откроете себе путь в огромную
                                экосистему и сможете создавать что угодно.</p>
                        </li>
                    </ul>
                    <p class="text-course">
                        На этом курсе мы не будем просто заучивать сухую теорию. Мы пройдём путь от самых основ
                        (переменные, функции) до реальных практических задач: работа с DOM, асинхронные запросы к
                        серверу, знакомство с современным синтаксисом ES6+.
                        <br>
                        <br>
                        Этот курс для вас, если: вы уже знакомы с основами HTML/CSS и готовы добавить своей вёрстке
                        интерактивности. Или если вы просто хотите понять, с чего начинается путь в программирование.
                        <br>
                        <br>
                        Готовы оживлять веб-страницы? Давайте начнем!
                    </p>
                </div>`
    } else if (section === '1.1') {
        contentDiv.innerHTML = `<h2 class="name-chapter">1.1 Настройка рабочего простарнства</h2>
        <div class="mini-cintainer">
                    <p class="text-course">
                        Теория теорией, но код пишется в конкретных программах. В этом модуле мы настроим минимальное, но достаточное окружение для комфортной работы с JavaScript.
                    </p>
                    <ol class="course-list">
                        <b>Нам потребуется:</b>
                        <li class="course-item">
                            <p class="cousre-item-text">Редактор кода (например, VS Code) — для написания и редактирования файлов.</p>
                        </li>
                        <li class="course-item">
                            <p class="cousre-item-tett">Современный браузер (Chrome, Firefox, Edge) с открытыми инструментами разработчика (DevTools) — для выполнения и отладки кода.</p>
                        </li>
                        <li class="course-item">
                            <p class="cousre-item-text">Node.js и npm (опционально, но рекомендуется) — для знакомства с серверным JavaScript и менеджером пакетов.</p>
                        </li>
                    </ol>
                    <p class="text-course">
                        Это стандартный набор современного фронтенд-разработчика. Установка займет немного времени, но избавит от проблем в будущем. Все инструменты бесплатны.
                        <br>
                        <br>
                        Инструкции — в следующих шагах. Установили? Переходим к 1.2!
                    </p>
                </div>`
    } else if (section === '1.2') {
        contentDiv.innerHTML = `<h2 class="name-chapter">1.2 Переменные</h2>
                <div class="mini-cintainer">
                    <p class="text-course">
                        Представьте, что вы переезжаете. У вас есть куча вещей: книги (строки "Гарри Поттер"), посуда (числа 42), коробка с маркерами (массив ['красный', 'синий']). Чтобы не носить каждый предмет в руках по одному, вы складываете их в коробки и подписываете: книги, посуда, канцелярия.
                        <br>
                        <br>
                        В программировании эти «коробки» называются переменными. Они нужны, чтобы хранить в памяти компьютера любые данные: числа, текст, списки, сложные объекты — и обращаться к ним по удобному имени.
                    </p>
                    <video src="#" poster="IMAGES/js-course.jpg" controls class="course-info-video"></video>
                </div>`
    } else if (section === '1.3') {
        contentDiv.innerHTML = `<h2 class="name-chapter">1.3 Условия</h2>
                <div class="mini-cintainer">
                    <p class="text-course">
                        До этого наш код был как простой рецепт: сделай раз, сделай два, выведи результат. Но настоящие программы — умные. Они анализируют ситуацию и действуют по-разному.
                        <br>
                        <br>
                        Представьте умную дверь. Она должна решить: <b>ЕСЛИ</b> в подошедшем человеке она распознала хозяина, ТО открыться. <b>ИНАЧЕ</b> — подать сигнал тревоги и <b>ЕСЛИ</b> это курьер с кодом доступа, <b>ТО</b> все же открыть на 5 секунд.
                        <br>
                        <br>
                        В <b>JavaScript</b> за такие решения отвечают конструкции if, else if и else. Это и есть ветвление — программа выбирает, по какой «ветке» кода пойти, в зависимости от условия.
                    </p>
                    <video src="#" poster="IMAGES/js-course.jpg" controls class="course-info-video"></video>
                </div>`
    } else if (section === '1.4') {
        contentDiv.innerHTML = `<h2 class="name-chapter">1.4 Циклы</h2>
                <div class="mini-cintainer">
                    <p class="text-course">
                        Представьте, что вам нужно поприветствовать каждого из 100 гостей на сайте. Писать 100 раз console.log("Привет, [имя]!") — скучно, неэффективно и просто невозможно, если вы не знаете, сколько гостей придет.
                        <br>
                        <br>
                        <b>Циклы</b> — это суперсилия программиста, которая позволяет выполнять один и тот же блок кода множество раз. Это двигатель автоматизации. Если условия — это мозг программы, то циклы — её неутомимые руки.
                    </p>
                    <ul class="course-list">
                        <b>В этом уроке вы познакомитесь с тремя главными типами циклов:</b>
                        <li class="course-item">
                            <p class="cousre-item-text"><i>for</i> — «цикл со счетчиком». Идеален, когда вы знаете, сколько раз нужно повторить действие.</p>
                        </li>
                        <li class="course-item">
                            <p class="cousre-item-tett"><i>while</i> — «цикл с условием». Выполняется, пока условие истинно. Подходит, когда число повторений заранее неизвестно.</p>
                        </li>
                        <li class="course-item">
                            <p class="cousre-item-text"><i>for...of</i> — «цикл для перебора коллекций». Элегантный способ пройтись по всем элементам массива или строки.</p>
                        </li>
                    </ul>
                    <video src="#" poster="IMAGES/js-course.jpg" controls class="course-info-video"></video>
                </div>`
    } else if (section === '1.5') {
        contentDiv.innerHTML = `<h2 class="name-chapter">1.5 Массивы</h2>
                <div class="mini-cintainer">
                    <p class="text-course">
                        До этого мы работали с отдельными переменными: одна коробка — одно значение. Но в реальности данные почти всегда приходят группами: список товаров в корзине, перечень сообщений в чате, координаты точек на карте, песни в плейлисте.
                        <br>
                        <br>
                        Хранить это в отдельных переменных item1, item2, item3 — неудобно и беспомощно. Как добавить 100-й элемент?
                        <br>
                        <br>
                        Массив (Array) — это специальная структура данных, которая хранит упорядоченную коллекцию элементов под одним именем. Представьте его как пронумерованный складской стеллаж или поезд с пронумерованными вагонами.
                    </p>
                    <video src="#" poster="IMAGES/js-course.jpg" controls class="course-info-video"></video>
                </div>`
    } else if (section === '1.6') {
        contentDiv.innerHTML = `<h2 class="name-chapter">1.6 Объекты</h2>
                <div class="mini-cintainer">
                    <p class="text-course">
                        До сих пор мы работали с примитивами (числа, строки) и списками (массивы). Но как описать в коде сложную, многогранную сущность? Например, пользователя сайта? У него есть имя, возраст, email, список друзей, аватар...
                        <br>
                        <br>
                        Объект <b>(Object)</b> — это структура данных, которая хранит набор свойств в формате ключ: значение. Если массив — это пронумерованный стеллаж, то объект — папка с документами, где каждый документ подписан (имя, возраст, email). Или визитная карточка.
                    </p>
                    <video src="#" poster="IMAGES/js-course.jpg" controls class="course-info-video"></video>
                    <p class="text-course">
                        Объекты — это язык, на котором JavaScript описывает мир. Давайте начнём говорить на нём!
                    </p>
                </div>`
    } else if (section === '1.7') {
        contentDiv.innerHTML = `<h2 class="name-chapter">1.7 DOM</h2>
                <div class="mini-cintainer">
                    <p class="text-course">
                        <b>DOM</b> — это объектно-ориентированное представление HTML-документа, которое формируется браузером при его загрузке. Это древовидная структура (дерево узлов), где каждый HTML-тег, атрибут и текстовый фрагмент становится отдельным объектом (узлом) со своими свойствами и методами.
                        <br>
                        <br>
                        Глобальный объект document — точка входа в <b>DOM</b>. Через него доступны все элементы страницы.
                    </p>
                    <video src="#" poster="IMAGES/js-course.jpg" controls class="course-info-video"></video>
                </div>`
    } else if (section === '1.8') {
        contentDiv.innerHTML = `<h2 class="name-chapter">1.8 Фреймворки</h2>
                <div class="mini-cintainer">
                    <p class="text-course">
                        Поздравляем! Вы освоили фундамент JavaScript: переменные, условия, циклы, массивы, объекты и DOM. Теперь вы можете создавать по-настоящему интерактивные страницы. Но представьте, что вы строите не сарай, а небоскрёб. Инструментов из набора «молоток-гвозди» (чистый JS и DOM) уже недостаточно. Нужны леса, подъёмные краны и готовые железобетонные блоки.
                        <br>
                        <br>
                        <b>Фреймворк (Framework)</b> — это не новый язык, а мощный набор инструментов, библиотек и строгих правил для построения сложных веб-приложений. Если чистый JS — это ручное управление каждым пикселем на странице, то фреймворк (например, <b>React, Vue или Angular</b>) — это конвейер, который автоматизирует рутину и позволяет сосредоточиться на логике и дизайне приложения.
                    </p>
                    <ul class="course-list">
                        <b>Что дают фреймворки?</b>
                        <li class="course-item">
                            <p class="cousre-item-text"><b>Компонентный подход</b>: Вы создаёте интерфейс из переиспользуемых блоков (компонентов), как из конструктора Лего.</p>
                        </li>
                        <li class="course-item">
                            <p class="cousre-item-tett"><b>Реактивность</b>: Данные и интерфейс связываются автоматически. Изменили массив — список на странице обновился сам.</p>
                        </li>
                        <li class="course-item">
                            <p class="cousre-item-text"><b>Роутинг</b>: Управление переходами между «страницами» в одном приложении (как в Gmail).</p>
                        </li>
                        <li class="course-item">
                            <p class="cousre-item-text"><b>Экосистема</b>: Готовые решения для типовых задач (управление состоянием, формы, анимации).</p>
                        </li>
                    </ul>
                    <video src="#" poster="IMAGES/js-course.jpg" controls class="course-info-video"></video>
                </div>`
    } else if (section === '1.9') {
        contentDiv.innerHTML = `<h2 class="name-chapter">1.9 Что делать дальше?</h2>
                <div class="mini-cintainer">
                    <p class="text-course">
                        Поздравляем! Вы прошли огромный путь — от первой переменной до понимания архитектуры современных приложений. Вы не просто выучили синтаксис, вы освоили образ мышления программиста. Теперь в ваших руках есть ключ от мира веб-разработки. Но что с ним делать?
                        <br>
                        <br>
                        Главный вопрос сейчас: «Как превратить знания в навыки, а навыки — в проекты?»
                        <br>
                        Вот ваша дорожная карта на ближайшие месяцы:
                    </p>
                    <ul class="course-list">
                        <b>Почему JS — это must-know?</b>
                        <li class="course-item">
                            <b class="cousre-item-text">Углубите фундамент (2-4 недели)</b>
                        </li>
                        <li class="course-item">
                            <b class="cousre-item-tett">Выберите и освойте стек (2-3 месяца)</b>
                        </li>
                        <li class="course-item">
                            <b class="cousre-item-text">Создавайте проекты, а не повторяйте туториалы (Вечный этап)</b>
                        </li>
                        <li class="course-item">
                            <b class="cousre-item-text">Станьте частью сообщества</b>
                        </li>
                        <li class="course-item">
                            <b class="cousre-item-text">Не останавливайтесь</b>
                        </li>
                    </ul>
                    <p class="text-course">
                        Вы проделали огромную работу. Теперь самое интересное — применение знаний. Вперёд, творить!
                    </p>
                </div>`
    }
}