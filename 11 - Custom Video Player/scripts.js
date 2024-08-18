/*  GETTING ELEMENTS    */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/*  BUILDING FUNCTIONS  */
// Function to play and pause video
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();  // dynamic method invocation
}
// Function to toggle the play and pause button
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}


/*  HOOKING UP THE EVENTS   */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
