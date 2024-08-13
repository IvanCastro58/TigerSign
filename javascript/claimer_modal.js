const addButton = document.querySelector('.action-button');
const popup = document.getElementById('claimer-type-modal');
const closeButton = document.getElementById('popup-close');

addButton.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

