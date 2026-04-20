// ══════════════════════════════════════════════════════
// Image Gallery Controller
// ══════════════════════════════════════════════════════

let currentIndex = 0;
const images = document.querySelectorAll('.gallery-image');
const totalImages = images.length;

document.getElementById('totalImages').textContent = totalImages;

function updateGallery() {
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) {
            img.classList.add('active');
        }
    });
    document.getElementById('currentImage').textContent = currentIndex + 1;
}

window.nextImage = function() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateGallery();
};

window.previousImage = function() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateGallery();
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') window.nextImage();
    if (e.key === 'ArrowLeft') window.previousImage();
});

setInterval(() => {
    window.nextImage();
}, 7000);

updateGallery();
