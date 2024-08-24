const claimerModal = document.querySelector('.action-button');
const claimerPopup = document.getElementById('claimer-type-modal');
const closeButton = document.getElementById('popup-close');

claimerModal.addEventListener('click', () => {
    claimerPopup.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    claimerPopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        claimerPopup.style.display = 'none';
    }
});

