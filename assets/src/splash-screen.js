document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splashScreen');
    const backgroundMusic = document.getElementById('backgroundMusic');
    let hasInteracted = false;
    
    function hideSplashAndPlayMusic() {
        if (hasInteracted) return; // Prevent multiple triggers
        hasInteracted = true;
        
        splashScreen.classList.add('hidden');
        
        // Set volume to 0.3 and start playing music
        backgroundMusic.volume = 0.3;
        backgroundMusic.play().catch(function(error) {
            console.log('Autoplay prevented or error:', error);
        });
        
        // Remove the element after animation completes
        setTimeout(function() {
            splashScreen.style.display = 'none';
        }, 600);
    }
    
    // Hide splash screen and play music on click
    splashScreen.addEventListener('click', hideSplashAndPlayMusic);
    
    // Also allow keyboard input to hide splash
    document.addEventListener('keydown', function(e) {
        if (!hasInteracted) {
            hideSplashAndPlayMusic();
        }
    });
});

