// Мигающий курсор в заголовке браузера
let showCursor = true;
setInterval(() => {
    showCursor = !showCursor;
    document.title = showCursor ? 'i think...|' : 'i think...';
}, 600);
