// Simple clipboard copy for elements with `data-copy` attribute
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-copy]').forEach(el => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', async (e) => {
            const value = el.getAttribute('data-copy');
            try {
                await navigator.clipboard.writeText(value);
                const orig = el.textContent;
                el.textContent = 'Copied!';
                setTimeout(() => { el.textContent = orig; }, 1200);
            } catch (err) {
                console.error('Copy failed', err);
            }
        });
    });
});
