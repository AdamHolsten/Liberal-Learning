const cardButtons = document.querySelectorAll('.click-for-modal');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.facility-item-container') || button.previousElementSibling;

  modalOuter.classList.add('open');
}


cardButtons.forEach((button) => button.addEventListener('click', handleCardButtonClick));