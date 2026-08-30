const isMobile = () => {
    const userAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    const hasTouch = () => {
        return (('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0) ||
                (navigator.msMaxTouchPoints > 0));
    };
    
    const smallScreen = window.innerWidth < 768;
    
    return userAgent || (hasTouch() && smallScreen);
};

const isMobileDevice = isMobile();

if (isMobileDevice) {
    const mobileStyle = document.createElement('style');
    mobileStyle.textContent = `
        * {
            cursor: auto !important;
        }
        #customCursor {
            display: none !important;
        }
    `;
    document.head.appendChild(mobileStyle);
    document.documentElement.style.cursor = 'auto';
    document.body.style.cursor = 'auto';
}

if (!isMobileDevice) {
    const cursor = document.createElement('div');
    cursor.id = 'customCursor';

const baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
const cursorPath = baseUrl + '/assets/src/плавающаяпизда.png';
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

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});
}
