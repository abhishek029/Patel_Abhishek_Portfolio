$(document).foundation()


//variables for video controls
var movie = document.querySelector("video"),
controls = document.querySelectorAll(".controls"),
currentSource,
Ext = '.mp4',
volumeUp = document.querySelector("#volup"),
volumeDown = document.querySelector("#voldown"),
mute = document.querySelector("#mute"),
fullscreen = document.querySelector("#fullscreen"),
ppause = document.querySelector(".ppause");





function playPause(){
	currentSource = movie.currentSrc;
		 // Ext = currentSource.substr(currentSource.lastIndexOf("."));
		 //console.log(Ext);
		if (movie.paused) {
			movie.play();
			play.src = "images/pause.svg";
			// hidePlayIcon();
			// playIcon.classList.remove("hidden");
		} else {
			movie.pause();
			play.src = "images/play.svg";
			// hidePauseIcon();
			// pauseIcon.classList.remove("hidden");
		}
}

function volumeup() {
		if (movie.volume <= 1) {
			movie.volume += .2;
		}
		//console.log(movie.volume);
	}


function volumedown() {
	if (movie.volume >= 0) {
		movie.volume -= .2;
	}
}


function mutevolume() {
	movie.volume = 0;
}

function goFullscreen() {
	//all requests for all browsers
	if (movie.requestFullscreen) {
    movie.requestFullscreen();
  } else if (movie.mozRequestFullScreen) { /* Firefox */
    movie.mozRequestFullScreen();
  } else if (movie.webkitRequestFullscreen) {
    movie.webkitRequestFullscreen();
  } else if (movie.msRequestFullscreen) { /* IE/Edge */
    movie.msRequestFullscreen();
  }
}







//listeners for trailer and teaser

volumeUp.addEventListener("click", volumeup, false);
volumeDown.addEventListener("click", volumedown, false);
mute.addEventListener("click", mutevolume, false);
fullscreen.addEventListener("click", goFullscreen, false);
ppause.addEventListener("click", playPause, false);
