// ===============typing animation============
	var type=0,
	promoText = "EVEN A SINGLE DOT CAN BE CODED IN MULTIPLE WAYS";

	function startTyping(){
		if(type<promoText.length){
			document.querySelector(".promoText").innerHTML+=promoText.charAt(i);
			i++;

			setTimeout(startTyping,150);
		
		}
	};
	startTyping();
	
	
	
	//default animation at loading site   
	TweenMax.to("#home", 0.1, {opacity:0.1,y:100});
	TweenMax.to("#about", 0.1, {opacity:0.1,y:100});
	TweenMax.to("#portfolio", 0.1, {opacity:0.1,y:100});
	TweenMax.to("#contact", 0.1, {opacity:0.1,y:100});

// variable for running loop only once
var i = 0;
var home = new Waypoint({
	element: document.querySelector('#home'),
	handler: function(direction) {
	  console.log('Scrolled to home!')
	  if(i == 0){
	   TweenMax.to("#home", 1, {opacity:1,y:0});
	   i++;
	  }
	},offset:600
  });


var a = 0;
var about = new Waypoint({
	element: document.querySelector('#about'),
	handler: function(direction) {
	  console.log('Scrolled to about!')
	  if(a == 0){
	   TweenMax.to("#about", 1, {opacity:1,y:0});
	   a++;
	  }
	},offset:600
  });

var b = 0; 
var portfolio = new Waypoint({
	element: document.querySelector('#portfolio'),
	handler: function(direction) {
	  console.log('Scrolled to portfolio!')
	  if(b == 0){
	   TweenMax.to("#portfolio", 1, {opacity:1,y:0});
	   b++;
	  }
	},offset: 600
  });

 var c = 0; 
 var contact = new Waypoint({
	  element: document.querySelector('#contact'),
	  handler: function(direction) {
		console.log('Scrolled to contact!')
		if(c == 0){
		 TweenMax.to("#contact", 1, {opacity:1,y:0});
		 c++;
		}
	  },offset:600
	});
  

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

// ================ Scroll Effects from medium screen========================

function scrollS(a){
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