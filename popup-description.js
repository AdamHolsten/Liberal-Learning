
// Grid View
// var autoPlay = "";
function closeModal() {
  modalOuter.classList.remove('open');
  const els = document.querySelectorAll('#embeddedVideo');
  for (let i = 0; i < els.length; i++) {
    els[i].setAttribute('src', '');
  }
  stopVideos();
}

// gridView(mediaQuery) // Call listener function at run time

const cardButtons = document.querySelectorAll('.click-for-modal');
const modalOuter = document.querySelector('.modal-outer-docuseries');
const modalInner = document.querySelector('.modal-inner-docuseries');
const buttonSelect = document.querySelector('.modal-inner-docuseries .close-module-button');
function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.facility-item-container') || button.previousElementSibling;

  // Grab the image src
  // const imgSrc = card.querySelector("img").src;
  const desc = card.querySelector('.description').textContent;
  const featuredImage = card.querySelector('.iframe-selector img').src;
  const name = card.querySelector('h2').textContent;

  // populate the modal with the new info
  modalInner.innerHTML = `<div class="intro-content">
    <p class="inner-theme">${name}</p>
    <hr/>

<div class="bio">
   <p>${desc}</p>
</div>


</div>

<div class="close-module-button" id="close-button" ></div>
`;
  // show the modal
  modalOuter.classList.add('open');
}
function startAutoPlay() {
  thevid = document.getElementById('thevideo');
  thevid.style.display = 'block';
  document.querySelector('#playWrap').style.display = 'none';
  document.querySelector('.thumbnail-container').style.display = 'none';
  document.querySelector('#embeddedVideo').src += '?autoplay=1';
}
cardButtons.forEach((button) => button.addEventListener('click', handleCardButtonClick));

modalOuter.addEventListener('click', (event) => {
  const isOutside = !event.target.closest('.modal-inner-docuseries');
  if (isOutside) {
    closeModal();
  }
});
modalOuter.addEventListener('click', (event) => {
  const buttonClose = event.target.closest('.close-module-button');
  if (buttonClose) {
    closeModal();
  }
});
window.addEventListener('keydown', (event) => {
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});
/**
* Stop all iframes or HTML5
<video>
's from playing
*/