export default searchImgFn;
import card from '../templates/card.hbs';

function searchImgFn(words, page, key) {
    fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${words}&page=${page}&per_page=12&key=${key}`).then((response) => response)
        .then(data => data.json())
        .then(arr => {
            let resultArray;
            resultArray = arr.hits;
            console.log(resultArray);
            console.log(arr.hits);
                const firstPageMarkup = card(resultArray);
                const ulRef = document.querySelector('.gallery');
                ulRef.insertAdjacentHTML('beforeend', firstPageMarkup);
        })
};

function loadMoreFn() { };