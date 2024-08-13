const addButton = document.querySelector('.add-user-btn');
const popup = document.getElementById('add-admin-popup');
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


