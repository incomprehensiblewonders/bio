// Custom Cursor - Replace mouse cursor with PNG image

// Disable custom cursor on mobile devices
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) {
    // Don't apply custom cursor on mobile
    document.documentElement.style.cursor = 'auto';
    document.body.style.cursor = 'auto';
}

if (!isMobile) {
    const cursor = document.createElement('div');
    cursor.id = 'customCursor';

// Get the correct path relative to the HTML file
const baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
const cursorPath = baseUrl + '/assets/src/cursor.png';
cursor.style.backgroundImage = `url('${cursorPath}')`;
cursor.style.backgroundSize = 'contain';
cursor.style.backgroundRepeat = 'no-repeat';
cursor.style.backgroundPosition = 'center';
document.body.appendChild(cursor);

const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    * {
        cursor: none !important;
    }
    #customCursor {
        position: fixed;
        width: 50px;
        height: 42px;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        opacity: 1;
    }
`;
document.head.appendChild(cursorStyle);

// Hide default cursor everywhere
document.body.style.cursor = 'none';
document.documentElement.style.cursor = 'none';

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Show cursor when entering window
document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
});

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});
}
