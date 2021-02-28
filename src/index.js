import './styles.css';
import searchImgFn from './js/apiService';
import gallery from './templates/gallery.hbs';

const debounce = require('lodash.debounce');
const searchForm = document.querySelector('#search-form');
const divMark = document.querySelector('.mark');
const apiKey = '20461350-36527ad634bc0878b1b72e118';
const firstPage = 1;
let currentNextPage = 1;
let searchWords;

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    divMark.innerHTML = '';
    searchWords = searchForm.elements.query.value;
    const title = { searchWords };
    const galleryMarkup = gallery(title);
    divMark.insertAdjacentHTML('beforeend', galleryMarkup);
    const btn = document.querySelector('.btn-load-more');
    btn.addEventListener('click', (event) => {
        loadMoreFn(event, currentNextPage);  
    });
    createFirstPage(searchWords);
    searchForm.reset();
});

const createFirstPage = (words) => {
    searchImgFn(words, firstPage, apiKey);}

function loadMoreFn(event, page) { 
    console.log(`click`, event);
    searchImgFn(searchWords, page, apiKey);
    currentNextPage = page + 1;
    console.log(currentNextPage);
};


