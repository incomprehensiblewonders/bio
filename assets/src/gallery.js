// Image Gallery Controller

let currentIndex = 0;
const images = document.querySelectorAll('.gallery-image');
const totalImages = images.length;
let autoSlideTimer;

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

function startAutoSlide() {
    // Очищаем старый таймер если он есть
    if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
    }
    // Запускаем новый таймер
    autoSlideTimer = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateGallery();
    }, 7000);
}

window.nextImage = function() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateGallery();
    startAutoSlide(); // Сбрасываем таймер
};

window.previousImage = function() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateGallery();
    startAutoSlide(); // Сбрасываем таймер
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') window.nextImage();
    if (e.key === 'ArrowLeft') window.previousImage();
});

startAutoSlide();

updateGallery();
