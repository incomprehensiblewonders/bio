document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.getElementById('closeButton');
    if (closeButton) {
        closeButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.close();
        });
    }
});
