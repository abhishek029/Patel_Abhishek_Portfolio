// bringing promo text from database

const promoText = document.querySelector("#promoText");


function addingPromoText(){
    
    fetch(`./includes/connect.php`)
    .then(res => res.json())
    .then(data => {
        // just to check data is coming or not
        // console.log(data[0]);

        // divided data into different feilds
        const {promo_id, promo_title, promo_label, promo_text} = data[0]
        // assigned html data to page
        document.querySelector("#promoLabel").textContent = promo_label;
        document.querySelector("#promoText").textContent = promo_text;
    })
    .catch(function(error){
        console.error(error);
    });

    
}
addingPromoText();
// Styles for title section
TweenMax.from("#title", 1, {y:-100});
TweenMax.to("#infuluncer-marketing", 0.1, {opacity:1, y:-100, delay:0.8});
TweenMax.from("#promoSection", 1, {opacity:0,delay:0.5});


//default values of bars
TweenMax.to("#twentybar, #bar", 1, {y:33.3,height:20, ease:Bounce.easeOut});
TweenMax.to("#thirtyFive_1_, #bar_3_", 1, {y:105.5,height:20, ease:Bounce.easeOut});
TweenMax.to("#fourtySeven_1_, #bar_2_", 1, {y:162,height:20, ease:Bounce.easeOut});
TweenMax.to("#ninetyTwo_1_, #bar_1_", 1, {y:289,height:20, ease:Bounce.easeOut});

// default style for headings and its info

TweenMax.to("#yellowInfo", 1, {opacity:0,y:70});
TweenMax.to("#yellowHeading", 1, {y:70,x:20,scale:0.8});

TweenMax.to("#orangeInfo", 1, {opacity:0,y:70});
TweenMax.to("#orangeHeading", 1, {y:70,x:10,scale:0.8});

TweenMax.to("#skyInfo", 1, {opacity:0,y:70});
TweenMax.to("#skyHeading", 1, {y:70,x:20,scale:0.8});

TweenMax.to("#lightBlueInfo", 1, {opacity:0,y:70});
TweenMax.to("#lighBlueHeading", 1, {y:70,x:10,scale:0.8});

TweenMax.to("#blueInfo", 1, {opacity:0,y:100});
TweenMax.to("#blueHeading", 1, {y:110,x:20,scale:0.8});


//variables for circles
var blueCircle = document.querySelector("#blueCircle");
var orangeCircle = document.querySelector("#orangeCircle");
var yellowCircle = document.querySelector("#yellowCircle");
var pinkCircle = document.querySelector("#pinkCircle");
var barChart = document.querySelector("#barChart");



//hover circle to increse height of bars for blue
function blueCircleOver(){
    TweenMax.to("#bar,#twentybar", 1, {y:0, height:53.3});
}
function blueCircleOut(){
    TweenMax.to("#bar,#twentybar", 1, {y:33.3, height:20, ease:Bounce.easeOut});
}

//hover circle to increse height of bars for orange
function orangeCircleOver(){
    TweenMax.to("#bar_3_,#thirtyFive_1_", 1, {y:0, height:125.2});
}
function orangeCircleOut(){
    TweenMax.to("#thirtyFive_1_, #bar_3_", 1, {y:105.2,height:20, ease:Bounce.easeOut});
}

//hover circle to increse height of bars for yellow
function yellowCircleOver(){
    TweenMax.to("#bar_2_,#fourtySeven_1_", 1, {y:0, height:182});
}
function yellowCircleOut(){
    TweenMax.to("#fourtySeven_1_, #bar_2_", 1, {y:162,height:20, ease:Bounce.easeOut});
}


//hover circle to increse height of bars for pink
function pinkCircleOver(){
    TweenMax.to("#bar_1_,#ninetyTwo_1_", 1, {y:0, height:309});
}
function pinkCircleOut(){
    TweenMax.to("#ninetyTwo_1_, #bar_1_", 1, {y:289,height:20, ease:Bounce.easeOut});
}

//bar chart over and out effect
function barChartOver(){    
    TweenMax.to("#bar,#twentybar", 1, {y:0, height:53.3});
    TweenMax.to("#bar_3_,#thirtyFive_1_", 1, {y:0, height:125.2});
    TweenMax.to("#bar_2_,#fourtySeven_1_", 1, {y:0, height:182});
    TweenMax.to("#bar_1_,#ninetyTwo_1_", 1, {y:0, height:309});
}

function barChartOut(){
    TweenMax.to("#bar,#twentybar", 1, {y:33.3, height:20, ease:Bounce.easeOut});
    TweenMax.to("#thirtyFive_1_, #bar_3_", 1, {y:105.2,height:20, ease:Bounce.easeOut});
    TweenMax.to("#fourtySeven_1_, #bar_2_", 1, {y:162,height:20, ease:Bounce.easeOut});
    TweenMax.to("#ninetyTwo_1_, #bar_1_", 1, {y:289,height:20, ease:Bounce.easeOut});
}

//function for thumbnail hover

function yellowThumbnailMouseOver(){
    TweenMax.to("#yellowInfo", 1, {opacity:1,y:0});
    TweenMax.to("#yellowHeading", 1, {y:0,x:0,scale:1});
    TweenMax.to("#yellowThumbnail", 1.5, {scale:1.3});
}
function yellowThumbnailMouseOut(){
    TweenMax.to("#yellowInfo", 1, {opacity:0,y:70});
    TweenMax.to("#yellowHeading", 1, {y:70,x:20,scale:0.8});
    TweenMax.to("#yellowThumbnail", 1, {scale:1});
}


function orangeThumbnailMouseOver(){
    TweenMax.to("#orangeInfo", 1, {opacity:1,y:0});
    TweenMax.to("#orangeHeading", 1, {y:0,x:0,scale:1});
    TweenMax.to("#orangeThumbnail", 1.5, {scale:1.3});
}
function orangeThumbnailMouseOut(){
    TweenMax.to("#orangeInfo", 1, {opacity:0,y:70});
    TweenMax.to("#orangeHeading", 1, {y:70,x:10,scale:0.8});
    TweenMax.to("#orangeThumbnail", 1.5, {scale:1});
}

function skyThumbnailMouseOver(){
    TweenMax.to("#skyInfo", 1, {opacity:1,y:0});
    TweenMax.to("#skyHeading", 1, {y:0,x:0,scale:1});
    TweenMax.to("#skyThumbnail", 1.5, {scale:1.3});
}
function skyThumbnailMouseOut(){
    TweenMax.to("#skyInfo", 1, {opacity:0,y:70});
    TweenMax.to("#skyHeading", 1, {y:70,x:20,scale:0.8});
    TweenMax.to("#skyThumbnail", 1.5, {scale:1});
}

function lightBlueThumbnailMouseOver(){
    TweenMax.to("#lightBlueInfo", 1, {opacity:1,y:0});
    TweenMax.to("#lighBlueHeading", 1, {y:0,x:0,scale:1});
    TweenMax.to("#lightBlueThumbnail", 1.5, {scale:1.3});
}
function lightBlueThumbnailMouseOut(){   
    TweenMax.to("#lightBlueInfo", 1, {opacity:0,y:70});
    TweenMax.to("#lighBlueHeading", 1, {y:70,x:10,scale:0.8});
    TweenMax.to("#lightBlueThumbnail", 1.5, {scale:1});
}


function blueThumbnailMouseOver(){
    TweenMax.to("#blueInfo", 1, {opacity:1,y:0});
    TweenMax.to("#blueHeading", 1, {y:0,x:0,scale:1});
    TweenMax.to("#blueThumbnail", 1.5, {scale:1.3});
}
function blueThumbnailMouseOut(){
    TweenMax.to("#blueInfo", 1, {opacity:0,y:100});
    TweenMax.to("#blueHeading", 1, {y:110,x:20,scale:0.8});
    TweenMax.to("#blueThumbnail", 1.5, {scale:1});
}

// functions for filling circle according to bars

function pinkBarMouseOver(){
    TweenMax.to("#outer", 1, {fill:'#FF00FF'});
}

function pinkBarMouseOut(){
    TweenMax.to("#outer", 1, {fill:'#FFFFFF'});
}

function yellowBarMouseOver(){
    TweenMax.to("#outer_6_", 1, {fill:'#FCEE21'});
}

function yellowBarMouseOut(){
    TweenMax.to("#outer_6_", 1, {fill:'#FFFFFF'});
}

function orangeBarMouseOver(){
    TweenMax.to("#outer_2_", 1, {fill:'#F15A24'});
}

function orangeBarMouseOut(){
    TweenMax.to("#outer_2_", 1, {fill:'#FFFFFF'});
}

function blueBarMouseOver(){
    TweenMax.to("#outer_3_", 1, {fill:'#1B1464'});
}

function blueBarMouseOut(){
    TweenMax.to("#outer_3_", 1, {fill:'#FFFFFF'});
}


//listener for blue circle
blueCircle.addEventListener("mouseover", blueCircleOver);
blueCircle.addEventListener("mouseout", blueCircleOut);


//listener for orange circle
orangeCircle.addEventListener("mouseover", orangeCircleOver);
orangeCircle.addEventListener("mouseout", orangeCircleOut);


//listener for yellow circle
yellowCircle.addEventListener("mouseover", yellowCircleOver);
yellowCircle.addEventListener("mouseout", yellowCircleOut);

//listener for yellow circle
pinkCircle.addEventListener("mouseover", pinkCircleOver);
pinkCircle.addEventListener("mouseout", pinkCircleOut);


barChart.addEventListener("mouseover", barChartOver);
barChart.addEventListener("mouseout",barChartOut);

//listener for thumbnail hover to display info


document.querySelector("#yellowIcon").addEventListener("mouseover", yellowThumbnailMouseOver);
document.querySelector("#yellowIcon").addEventListener("mouseout", yellowThumbnailMouseOut);
document.querySelector("#yellowThumbnail").addEventListener("mouseover", yellowThumbnailMouseOver);
document.querySelector("#yellowThumbnail").addEventListener("mouseout", yellowThumbnailMouseOut);

document.querySelector("#orangeIcon").addEventListener("mouseover", orangeThumbnailMouseOver);
document.querySelector("#orangeIcon").addEventListener("mouseout", orangeThumbnailMouseOut);
document.querySelector("#orangeThumbnail").addEventListener("mouseover", orangeThumbnailMouseOver);
document.querySelector("#orangeThumbnail").addEventListener("mouseout", orangeThumbnailMouseOut);

document.querySelector("#sktIcon").addEventListener("mouseover", skyThumbnailMouseOver);
document.querySelector("#sktIcon").addEventListener("mouseout", skyThumbnailMouseOut);
document.querySelector("#skyThumbnail").addEventListener("mouseover", skyThumbnailMouseOver);
document.querySelector("#skyThumbnail").addEventListener("mouseout", skyThumbnailMouseOut);

document.querySelector("#lightBlueIcon").addEventListener("mouseover", lightBlueThumbnailMouseOver);
document.querySelector("#lightBlueIcon").addEventListener("mouseout", lightBlueThumbnailMouseOut);
document.querySelector("#lightBlueThumbnail").addEventListener("mouseover", lightBlueThumbnailMouseOver);
document.querySelector("#lightBlueThumbnail").addEventListener("mouseout", lightBlueThumbnailMouseOut);

document.querySelector("#blueIcon").addEventListener("mouseover", blueThumbnailMouseOver);
document.querySelector("#blueIcon").addEventListener("mouseout", blueThumbnailMouseOut);
document.querySelector("#blueThumbnail").addEventListener("mouseover", blueThumbnailMouseOver);
document.querySelector("#blueThumbnail").addEventListener("mouseout", blueThumbnailMouseOut);


// listeners for filling circle according to bars

document.querySelector("#bar_1_").addEventListener("mouseover", pinkBarMouseOver);
document.querySelector("#bar_1_").addEventListener("mouseout", pinkBarMouseOut);

document.querySelector("#bar_2_").addEventListener("mouseover", yellowBarMouseOver);
document.querySelector("#bar_2_").addEventListener("mouseout", yellowBarMouseOut);

document.querySelector("#bar_3_").addEventListener("mouseover", orangeBarMouseOver);
document.querySelector("#bar_3_").addEventListener("mouseout", orangeBarMouseOut);

document.querySelector("#bar").addEventListener("mouseover", blueBarMouseOver);
document.querySelector("#bar").addEventListener("mouseout", blueBarMouseOut);