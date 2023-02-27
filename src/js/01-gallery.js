// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const gallerryItm = galleryItems
  .map(
    ({ preview, original, description }) => `
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
 `
  )
  .join('');
gallery.innerHTML = gallerryItm;

gallery.addEventListener('click', onGalleryI);
function onGalleryI(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  new SimpleLightbox('.gallery a', {
    disableRightClick: true,
    scrollZoom: false,
    captionDelay: 250,
    captionsData: 'alt',
  });
}
