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
