import './styles.css';
import searchImgFn from './js/apiService';
import gallery from './templates/gallery.hbs';


const debounce = require('lodash.debounce');
const searchForm = document.querySelector('#search-form');
const divMark = document.querySelector('.mark');
const apiKey = '20461350-36527ad634bc0878b1b72e118';
let btn;


searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    divMark.innerHTML = '';
    const searchWords = searchForm.elements.query.value;
    createFirstPage(searchWords);

    
    searchForm.reset();
});

const createFirstPage = (searchWords) => {
    
    const title = { searchWords };
    const firstPage = 1;
    let resFetch = searchImgFn(searchWords, firstPage, apiKey);
    const galleryMarkup = gallery(title);
    divMark.insertAdjacentHTML('beforeend', galleryMarkup);
    btn = document.querySelector('.btn-load-more');
    btn.addEventListener('submit', loadMoreFn);
}

