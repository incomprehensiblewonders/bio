document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splashScreen');
    const backgroundMusic = document.getElementById('backgroundMusic');
    let hasInteracted = false;
    
    function hideSplashAndPlayMusic() {
        if (hasInteracted) return;
        hasInteracted = true;
        
        splashScreen.classList.add('hidden');
        
        backgroundMusic.volume = 0.3;
        backgroundMusic.play().catch(function(error) {
            console.log('Autoplay prevented or error:', error);
        });
        
        setTimeout(function() {
            splashScreen.style.display = 'none';
        }, 600);
    }
    
    splashScreen.addEventListener('click', hideSplashAndPlayMusic);
    
    document.addEventListener('keydown', function(e) {
        if (!hasInteracted) {
            hideSplashAndPlayMusic();
        }
    });
});

