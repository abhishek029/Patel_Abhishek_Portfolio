
	// //default animation at loading site   
	// TweenMax.to("#home", 0.1, {opacity:0.1,y:100});
	TweenMax.to("#about", 0.1, {opacity:0.1});
	TweenMax.to("#portfolio", 0.1, {opacity:0.1});
	// TweenMax.to("#contact", 0.1, {opacity:0.1,y:100});

// variable for running loop only once
var i = 0;
var home = new Waypoint({
	element: document.querySelector('#promoSection'),
	handler: function(direction) {
	  console.log('Scrolled to home!')
	  if(i == 0){
	   TweenMax.from("#promoSection", 1, {opacity:0.7});
	   i++;
	  }
	},offset:300
  });


var a = 0;
var about = new Waypoint({
	element: document.querySelector('#about'),
	handler: function(direction) {
	  console.log('Scrolled to about!')
	  if(a == 0){
	   TweenMax.to("#about", 1, {opacity:1});
	   a++;
	  }
	},offset:450
  });

var b = 0; 
var portfolio = new Waypoint({
	element: document.querySelector('#portfolio'),
	handler: function(direction) {
	  console.log('Scrolled to portfolio!')
	  if(b == 0){
	   TweenMax.to("#portfolio", 1, {opacity:1});
	   b++;
	  }
	},offset: 450
  });

//  var c = 0; 
//  var contact = new Waypoint({
// 	  element: document.querySelector('#contact'),
// 	  handler: function(direction) {
// 		console.log('Scrolled to contact!')
// 		if(c == 0){
// 		 TweenMax.to("#contact", 1, {opacity:1,y:0});
// 		 c++;
// 		}
// 	  },offset:600
// 	});
  

//   =================================Lottie================================
/*
const preloader = document.querySelector('.preloader');

	let preloadAnim = bodymovin.loadAnimation({
		wrapper : preloader,
		animType : 'svg',
		loop : true,
		autoplay : true,
		path : 'data/preloader.json'

	});

	var anim = setInterval(stopLottie,1500);
	
	function stopLottie(){
		console.log("lottie");
		document.querySelector(".preloader").style.display="none";
		clearInterval(anim);
	}

*/

//==========================variables for video controls========================
var movie = document.querySelector("video"),
volumeUp = document.querySelector("#volup"),
volumeDown = document.querySelector("#voldown"),
mute = document.querySelector("#mute"),
fullscreen = document.querySelector("#fullscreen"),
ppause = document.querySelector(".ppause");



	
function playPause(){
		if (movie.paused) {
			movie.play();
			play.src = "images/pause.svg";
		} else {
			movie.pause();
			play.src = "images/play.svg";
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





//listeners

volumeUp.addEventListener("click", volumeup, false);
volumeDown.addEventListener("click", volumedown, false);
mute.addEventListener("click", mutevolume, false);
fullscreen.addEventListener("click", goFullscreen, false);
ppause.addEventListener("click", playPause, false);

