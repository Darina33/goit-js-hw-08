import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const imagesContainer = document.querySelector(".gallery")
const createItems = createGalleryItems(galleryItems);

imagesContainer.insertAdjacentHTML('beforeend', createItems);


function createGalleryItems(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__link" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
        </a>`
    }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
    captionDelay: 250,
});

