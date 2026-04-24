// Blinking cursor in browser title bar

let showCursor = true;
setInterval(() => {
    showCursor = !showCursor;
    document.title = showCursor ? 'i think...|' : 'i think...';
}, 600);
