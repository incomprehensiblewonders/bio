// ══════════════════════════════════════════════════════
// Audio Player Controller
// ══════════════════════════════════════════════════════

const tracks = [
    { name: 'Bladee - egobaby', url: './audio/egobaby.mp3' },
    { name: 'Singto Conley - Nagisa', url: './audio/Nagisa.mp3' },
    { name: 'Lovesicxo - Breaking The Code', url: './audio/004.mp3' },
    { name: 'Cloudier - A Centimetre Apart', url: './audio/A_Centimetre_Apart.mp3' },
    { name: 'pichu - stand out ft. blackwinterwells', url: './audio/stand_out.mp3' },
    { name: 'blindboy, Sofuu, mididuck - Hold On', url: './audio/Hold_On.mp3' },
    { name: 'Bladee - I Think', url: './audio/I_Think.mp3' },
];

let currentTrackIndex = 0;
let isPlaying = false;
let loadedTrackIndex = -1;
const audio = new Audio();
audio.volume = 0.3;

function updateTrackDisplay() {
    document.getElementById('currentTrackName').textContent = tracks[currentTrackIndex].name;
    document.getElementById('currentTrackIndex').textContent = `${currentTrackIndex + 1} / ${tracks.length}`;
    updatePlayButton();
}

function updatePlayButton() {
    const btn = document.getElementById('playButton');
    btn.textContent = isPlaying ? '⏸ PAUSE' : '▶ PLAY';
}

window.nextTrack = function() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    audio.src = tracks[currentTrackIndex].url;
    audio.currentTime = 0;
    loadedTrackIndex = currentTrackIndex;
    updateTrackDisplay();
    if (isPlaying) {
        audio.play();
    }
};

window.previousTrack = function() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    audio.src = tracks[currentTrackIndex].url;
    audio.currentTime = 0;
    loadedTrackIndex = currentTrackIndex;
    updateTrackDisplay();
    if (isPlaying) {
        audio.play();
    }
};

window.togglePlay = function() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        if (loadedTrackIndex !== currentTrackIndex) {
            audio.src = tracks[currentTrackIndex].url;
            loadedTrackIndex = currentTrackIndex;
        }
        audio.play();
        isPlaying = true;
    }
    updatePlayButton();
};

// Initialize
audio.src = tracks[currentTrackIndex].url;
loadedTrackIndex = currentTrackIndex;
updateTrackDisplay();

// Автоматическое переключение на следующий трек при окончании текущего
audio.addEventListener('ended', function() {
    window.nextTrack();
    audio.play();
});
