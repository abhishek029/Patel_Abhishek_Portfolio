var waypoint = new Waypoint({
	element: document.getElementById('about'),
	handler: function(direction) {
	  console.log('Scrolled to waypoint!')
	  
	   TweenMax.to(".myDesc", 1, {scale:1});
	}
  })



//   =================================Lottie================================
const preloader = document.querySelector('.preloader');

	let preloadAnim = bodymovin.loadAnimation({
		wrapper : preloader,
		animType : 'svg',
		loop : false,
		autoplay : true,
		path : 'data/preloader.json'

	});

	function playAnimation() {
		preloadAnim.play();
		// setInterval(document.querySelector(".preloader").style.display="none", 1000);
		setInterval("",10000);
		document.querySelector(".preloader").style.display="none";
	}

	playAnimation();
//variables for video controls
var movie = document.querySelector("video"),
volumeUp = document.querySelector("#volup"),
volumeDown = document.querySelector("#voldown"),
mute = document.querySelector("#mute"),
fullscreen = document.querySelector("#fullscreen"),
ppause = document.querySelector(".ppause");



function scrollS(a){
	var home= document.querySelector("#home");
	a = a || window.event;
	a = a.target || a.srcElement;
	console.log(a.id);
	if(a.id=="homeScroll")
		window.scrollTo({top: 0,behavior: "smooth"});	
	if(a.id=="aboutScroll")
		window.scrollTo({top: 550,behavior: "smooth"});
	if(a.id=="portfolioScroll")
		window.scrollTo({top: 1300,behavior: "smooth"});
	if(a.id=="contactScroll")
		window.scrollTo({top: 4500,behavior: "smooth"});
	if(a.id != "myMenu")
		document.querySelector("#main-menu").classList.add('hidden');
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

