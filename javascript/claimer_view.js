// Select buttons and modals
const claimerSignatureButton = document.querySelector('.claimer-signature .proof-btn');
const claimerPhotoButton = document.querySelector('.claimer-photo .proof-btn');

const claimerSignatureModal = document.getElementById('claimer-signature-modal');
const claimerPhotoModal = document.getElementById('claimer-photo-modal');

// Select close buttons for both modals
const closeSignatureButton = claimerSignatureModal.querySelector('.popup-close');
const closePhotoButton = claimerPhotoModal.querySelector('.popup-close');

// Function to show the claimer's signature modal
claimerSignatureButton.addEventListener('click', () => {
    claimerSignatureModal.style.display = 'flex';
    setTimeout(() => {
        claimerSignatureModal.querySelector('.popup').classList.add('show');
    }, 10);
});

// Function to show the claimer's photo modal
claimerPhotoButton.addEventListener('click', () => {
    claimerPhotoModal.style.display = 'flex';
    setTimeout(() => {
        claimerPhotoModal.querySelector('.popup').classList.add('show');
    }, 10);
});

// Function to close the claimer's signature modal
closeSignatureButton.addEventListener('click', () => {
    claimerSignatureModal.querySelector('.popup').classList.remove('show');
    setTimeout(() => {
        claimerSignatureModal.style.display = 'none';
    }, 600);
});

// Function to close the claimer's photo modal
closePhotoButton.addEventListener('click', () => {
    claimerPhotoModal.querySelector('.popup').classList.remove('show');
    setTimeout(() => {
        claimerPhotoModal.style.display = 'none';
    }, 600);
});

// Close modals when clicking outside of them
window.addEventListener('click', (event) => {
    if (event.target === claimerSignatureModal) {
        claimerSignatureModal.querySelector('.popup').classList.remove('show');
        setTimeout(() => {
            claimerSignatureModal.style.display = 'none';
        }, 600);
    }
    if (event.target === claimerPhotoModal) {
        claimerPhotoModal.querySelector('.popup').classList.remove('show');
        setTimeout(() => {
            claimerPhotoModal.style.display = 'none';
        }, 600);
    }
});

function openPopup() {
    document.getElementById('imagePopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('imagePopup').style.display = 'none';
}
