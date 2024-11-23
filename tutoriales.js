
const video = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const seekBar = document.getElementById('seekBar');
const volumeBar = document.getElementById('volumeBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');


playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
});

muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
});

video.addEventListener('timeupdate', () => {
    seekBar.value = video.currentTime / video.duration;
    let minutes = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime % 60);
    currentTimeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

seekBar.addEventListener('input', () => {
    video.currentTime = seekBar.value * video.duration;
});

volumeBar.addEventListener('input', () => {
    video.volume = volumeBar.value;
});

video.addEventListener('loadedmetadata', () => {
    let minutes = Math.floor(video.duration / 60);
    let seconds = Math.floor(video.duration % 60);
    durationDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});