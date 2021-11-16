import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryComponent = document.querySelector('.gallery');
const addedGalleryCard = galleryCards(galleryItems);
let instance = {};

function galleryCards(gallery){
    return gallery
    .map(({ original, preview, description }) => {
        return `<div class="gallery__items">
        <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
      </a>
      </div>` ;
    })
    .join('');
}

galleryComponent.insertAdjacentHTML('beforeend', addedGalleryCard);

function onGalleryCardClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    openModalWindow(event.target.dataset.source)
}
galleryComponent.addEventListener('click', onGalleryCardClick);

function createModalImage(picture) {
    return basicLightbox.create(`<img src='${picture}' width='800' height='600'>`)
}

function openModalWindow(picture) {
    instance = createModalImage(picture);
    instance.show();
   
}


