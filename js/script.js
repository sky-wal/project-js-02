/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1)

const promodiv = document.querySelector('.promo__adv'),
    //imgs = promodiv.getElementsByTagName('img');
    imgs = promodiv.querySelectorAll('img');

console.log(imgs);
imgs.forEach(item => {
    item.remove();
});

// 2)

const oldGenreDiv = document.querySelectorAll('.promo__genre'),
    newGenreDiv = document.createElement('div');

newGenreDiv.classList.add('promo__genre');
newGenreDiv.textContent = 'Драма';

oldGenreDiv[0].replaceWith(newGenreDiv);
 
// 3)

const promoBgDiv = document.querySelector('.promo__bg');

promoBgDiv.style.backgroundImage = 'url(../img/bg.jpg)';

// 4)

// const forDelete = document.querySelectorAll('.promo__interactive-item');
document.querySelectorAll('.promo__interactive-item').forEach(item => {
    item.remove();
});

movieDB.movies.sort();

let moviesHTML = '';
movieDB.movies.forEach((item, i) => {
    let a = `<li class="promo__interactive-item">${i+1}. ${item}<div class="delete"></div></li>`;
    moviesHTML += a;
});

document.querySelector('.promo__interactive-list').innerHTML = moviesHTML;

// 5)

