const addAdmin = document.querySelector('.add-user-btn');
const adminPopup = document.getElementById('add-admin-popup');
const closeAddAdmin = document.getElementById('popup-close');

addAdmin.addEventListener('click', () => {
    adminPopup.style.display = 'flex';
});

closeAddAdmin.addEventListener('click', () => {
    adminPopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        adminPopup.style.display = 'none';
    }
});
