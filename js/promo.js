

//variables for video controls
var movie = document.querySelector("video"),
volumeUp = document.querySelector("#volup"),
volumeDown = document.querySelector("#voldown"),
mute = document.querySelector("#mute"),
fullscreen = document.querySelector("#fullscreen"),
ppause = document.querySelector(".ppause");



function scrollS(a){
	a = a || window.event;
	a = a.target || a.srcElement;
	console.log(a.id);
	if(a.id=="homeScroll")
		window.scrollTo({top: 0,behavior: "smooth"});	
	if(a.id=="aboutScroll")
		window.scrollTo({top: 550,behavior: "smooth"});
	if(a.id=="portfolioScroll")
		window.scrollTo({top: 2000,behavior: "smooth"});
	if(a.id=="contactScroll")
		window.scrollTo({top: 3100,behavior: "smooth"});
	
}

document.addEventListener("click",scrollS,false); 	
//methods for trailer and teaser
function playPause(){
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

