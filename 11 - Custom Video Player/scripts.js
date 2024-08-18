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
// Function to skip the video 10 seconds backward and 25 seconds forward
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}
// Function to up and down the volume AND change the playBackRate of a video
function handleRangeUpdate() {
    video[this.name] = this.value;
}
/*  HOOKING UP THE EVENTS   */

// Video play and pause Event
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);

// Video Skip Event 
skipButtons.forEach(button => button.addEventListener('click', skip));

// video volume and playBackRate range Event 
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));