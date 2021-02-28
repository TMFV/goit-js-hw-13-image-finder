export default searchImgFn;

import card from '../templates/card.hbs';

async function searchImgFn(words, page, key) {
    await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${words}&page=${page}&per_page=12&key=${key}`).then((response) => response)
        .then(data => data.json())
        .then(arr => {
            let resultArray;
            resultArray = arr.hits;
            console.log(resultArray);
            console.log(arr.hits);
                const nextPageMarkup = card(resultArray);
                const ulRef = document.querySelector('.gallery');
            ulRef.insertAdjacentHTML('beforeend', nextPageMarkup);
             
            console.log(document.documentElement.offsetHeight);
            
            
            
        })
   window.scrollTo({
                top: document.documentElement.offsetHeight,
                behavior: 'smooth',});
};

