const deactivateButton = document.querySelector('.activate-btn');
const confirmPopup = document.getElementById('confirm-deactivation-popup');
const confirmCloseButton = document.getElementById('popup-close');
const confirmInput = document.getElementById('confirm-input');
const submitBtn = document.querySelector('.submit-btn');

deactivateButton.addEventListener('click', () => {
    confirmPopup.style.display = 'flex';
});

confirmCloseButton.addEventListener('click', () => {
    confirmPopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === confirmPopup) {
        confirmPopup.style.display = 'none';
    }
});

confirmInput.addEventListener('input', () => {
    if (confirmInput.value.toUpperCase() === 'CONFIRM') {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
});
