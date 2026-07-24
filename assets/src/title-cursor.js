let showCursor = true;
setInterval(() => {
    showCursor = !showCursor;
    document.title = showCursor ? '思う...|' : '思う...';
}, 600);
