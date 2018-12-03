//// JavaScript Document
console.log("JS file loaded");

//variables
var countdown = document.querySelector("#countDown"),
	count = countdown.innerHTML,
	startendtimer = document.querySelector("#startEndTimer");

var i;//declared here for accecssing it through muktiple functions

var smallbug = document.querySelector("#smallbug"),
    mediumbug = document.querySelector("#mediumbug"),
    largebug = document.querySelector("#largebug"),
    score = document.querySelector("#score"),
    ans = 0,
    smallopacity = 1.0,
    mediumopacity = 1.0
    largeopacity = 1.0,
    opicitylimit= 5.551115123125783e-17,
	//opicitylimit= 5.551115123125783e-17  hard coded this value because it is last value of opacity and bug dies after that
    finalscore = 0,
    //default position for left
    smallpos=37,
	mediumpos=34,
	largepos = 35;

	//default position for top
	smalltop=7,
	mediumtop=5,
	largetop=5;

function startTimer(){
	
	if(startendtimer.innerHTML=="BEGIN"){
		i = setInterval(timer,1000);
		startendtimer.innerHTML="END";
	}
	else{
		startendtimer.innerHTML="BEGIN";
		clearTimeout(i);
		countdown.innerHTML=15;//reset timer to 99 seconds after end
		count=countdown.innerHTML;
		//reset all variables value to its default when user clicks on end button
		ans=0;
		document.querySelector("#smallbug").style.opacity=1;
		document.querySelector("#mediumbug").style.opacity=1;
		document.querySelector("#largebug").style.opacity=1;
		smallopacity = 1.0,
	    mediumopacity = 1.0
	    largeopacity = 1.0,
	    finalscore = 0;
		
	}
}
function timer(){

	if(count > 0){
		count--;
		countdown.innerHTML=count;

//		var random = Math.floor(Math.random() * 100);
//update random number by new value for moving it from left

//end loop if only the number is in range of game area
		// do{
		// 	smallpos = Math.floor(Math.random() * 100);
		// 	mediumpos = Math.floor(Math.random() * 100);
		// 	largepos = Math.floor(Math.random() * 100);
		// }while(smallpos <= 82 && smallpos >= 37 && mediumpos >= 35 && mediumpos <=79 && largepos >= 34 && largepos <= 76);
	

	while(true){
		console.log("abc");
		smallpos = Math.floor(Math.random() * 100);
		mediumpos = Math.floor(Math.random() * 100);
		largepos = Math.floor(Math.random() * 100);
		if(smallpos <= 82 && smallpos >= 37 && mediumpos >= 35 && mediumpos <=79 && largepos >= 34 && largepos <= 76){
			break;
		}
	}
		// console.log("smallleft"+smallpos);
//		console.log(random);
		smallbug.style.left = smallpos+'%';
		mediumbug.style.left = mediumpos+'%';		
		largebug.style.left = largepos+'%';

		
//update random number by new value for moving it from top
//end loop if only the number is in range of game area
		// do{
		// 	smalltop = Math.floor(Math.random() * 100);
		// 	mediumtop = Math.floor(Math.random() * 100);
		// 	largetop = Math.floor(Math.random() * 100);
		// }while(smalltop >=7  && smalltop <= 75 && mediumtop >= 5 && mediumtop <=68 && largetop >= 5 && largetop <= 62);

		while(true){
			smalltop = Math.floor(Math.random() * 100);
			mediumtop = Math.floor(Math.random() * 100);
			largetop = Math.floor(Math.random() * 100);
			if(smalltop >=7  && smalltop <= 75 && mediumtop >= 5 && mediumtop <=68 && largetop >= 5 && largetop <= 62){
				break;
			}
		}
		smallbug.style.top = smalltop+'%';
		mediumbug.style.top = mediumtop+'%';		
		largebug.style.top = largetop+'%';
//		   mydiv.style.left = pos+'px';
	}
	else if(count == 0){
		result();
		clearTimeout(i);
		if(finalscore<2){
			alert("You Lost try again");
		}
	}
}


function result(){
console.log("Your Score");

	
}
	
function calcScore(a){
	//main if condition because update score only if timer is running
	if(countdown.innerHTML > 0 && countdown.innerHTML < 15 ){
		a = a || window.event;
		a = a.target || a.srcElement;
		console.log(a.id);

		if(a.id=="smallbug"){
			smallopacity-=0.2;
			document.querySelector("#"+a.id).style.opacity=smallopacity;
			ans++;
			
			if(smallopacity == opicitylimit){
				finalscore++;
			}
		}
		if(a.id=="mediumbug"){
			mediumopacity-=0.2;
			document.querySelector("#"+a.id).style.opacity=mediumopacity;
			ans++;
			if(mediumopacity == opicitylimit){
				finalscore++;
			}
		}
		if(a.id=="largebug"){
			largeopacity-=0.2;
			document.querySelector("#"+a.id).style.opacity=largeopacity;
			ans++;
			// console.log(largeopacity);
			if(largeopacity == opicitylimit){
				finalscore++;
			}
		}

		//if all three bugs dies before timer is off the game is over and user wins
		if(finalscore>2){
			alert("Congrats You Won");
		}

	}
	score.innerHTML=ans;
	// console.log(ans);
	console.log(finalscore);
}

startendtimer.addEventListener("click", startTimer, false);

document.addEventListener("click", calcScore, false);
