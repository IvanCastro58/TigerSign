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

document.getElementById('add-admin-form').addEventListener('submit', (event) => {
    const emailInput = document.getElementById('admin-email');
    const emailValue = emailInput.value;

    if (!emailValue.endsWith('@ust.edu.ph')) {
        alert('Please enter a valid @ust.edu.ph account.');
        event.preventDefault(); // Prevent form submission
    }
});
