// Audio Player Controller

const tracks = [
    { name: 'Astrale - How To Observe', url: './audio/How_To_Observe.mp3' }
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
    btn.textContent = isPlaying ? '|| PAUSE' : '> PLAY';
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

audio.src = tracks[currentTrackIndex].url;
loadedTrackIndex = currentTrackIndex;
updateTrackDisplay();

audio.addEventListener('ended', function() {
    window.nextTrack();
    audio.play();
});
