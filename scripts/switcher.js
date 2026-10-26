document.addEventListener('DOMContentLoaded', () => {
    const listBtn = document.querySelector('.news-controls__view-btn--list');
    const gridBtn = document.querySelector('.news-controls__view-btn--grid');
    const newsList = document.querySelector('.news__list');

    if (!listBtn || !gridBtn || !newsList) return;

    const activateList = () => {
        newsList.classList.remove('news__list--grid');
        newsList.classList.add('news__list--list');

        listBtn.classList.add('news-controls__view-btn--active');
        listBtn.setAttribute('aria-pressed', 'true');

        gridBtn.classList.remove('news-controls__view-btn--active');
        gridBtn.setAttribute('aria-pressed', 'false');
    };

    const activateGrid = () => {
        newsList.classList.remove('news__list--list');
        newsList.classList.add('news__list--grid');

        gridBtn.classList.add('news-controls__view-btn--active');
        gridBtn.setAttribute('aria-pressed', 'true');

        listBtn.classList.remove('news-controls__view-btn--active');
        listBtn.setAttribute('aria-pressed', 'false');
    };

    listBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!listBtn.classList.contains('news-controls__view-btn--active')) {
            activateList();
        }
    });

    gridBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!gridBtn.classList.contains('news-controls__view-btn--active')) {
            activateGrid();
        }
    });
});