let showCursor = true;
setInterval(() => {
    showCursor = !showCursor;
    document.title = showCursor ? 'distant...|' : 'distant...';
}, 600);
