import { galleryItems } from './gallery-items.js';
// Change code below this line

//gallery
const galleryComponent = document.querySelector('.gallery');
const addedGalleryCard = galleryCards(galleryItems);

//появление подписи
const lightboxSetting = {
    captions: true,
    captionDelay: 250,
  };


//список изображений
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

galleryComponent.innerHTML = addedGalleryCard;

const lightbox = new SimpleLightbox(".gallery a", lightboxSetting);