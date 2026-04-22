function loadChapter (chapterName) {
    fetch(`chapters/${chapterName}.html`).then(response => response.text()).then(html => {
        document.getElementById('swap').innerHTML = html;
        window.location.hash = chapterName;
    }).catch(error => {
        document.getElementById('swap').innerHTML = 'Ошибка загрузки главы';
        console.error('Ошибка:', error);
    })
}

function loadChapterFromURL() {
    const hash = window.location.hash.substring(1);

    if (hash) {
        loadChapter(hash)
    } else {
        loadChapter('chapter1')
    }
}

window.onload = loadChapterFromURL;

window.addEventListener('hashchange', loadChapterFromURL);