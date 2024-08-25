const deactivateButton = document.querySelector('.activate-btn');
const confirmPopup = document.getElementById('confirm-deactivation-popup');
const confirmPopupElement = confirmPopup.querySelector('.popup');
const confirmCloseButton = document.getElementById('popup-close');
const confirmInput = document.getElementById('confirm-input');
const submitBtn = document.querySelector('.submit-btn');

deactivateButton.addEventListener('click', () => {
    confirmPopup.style.display = 'flex';
    setTimeout(() => {
        confirmPopupElement.classList.add('show');
    }, 10);
});

confirmCloseButton.addEventListener('click', () => {
    confirmPopupElement.classList.remove('show');
    setTimeout(() => {
        confirmPopup.style.display = 'none';
    }, 600);
});

window.addEventListener('click', (event) => {
    if (event.target === confirmPopup) {
        confirmPopupElement.classList.remove('show');
        setTimeout(() => {
            confirmPopup.style.display = 'none';
        }, 600);
    }
});

confirmInput.addEventListener('input', () => {
    if (confirmInput.value.toUpperCase() === 'CONFIRM') {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
});
