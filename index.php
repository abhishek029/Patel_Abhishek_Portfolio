<!DOCTYPE html>
<html class="no-js" lang="en" dir="ltr">
<head>
    <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <title>PATEL ABHI</title>   
    <link rel="stylesheet" href="css/foundation.css">
    <link rel="stylesheet" href="css/foundation.min.css">
    <link rel="stylesheet" href="css/main.css">
    <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Patrick+Hand" rel="stylesheet">
    <!-- link to lottie  -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.4.1/lottie.js"></script>
    <!-- link to way points -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.js"></script>
    <!-- link to vue.js -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
</head>     

<body>
    <main id="app">
   
<!--============This code is totally correct but its now working so I did mu own menu by adding alasses and removing classes on click================
        <header>
            <div class="title-bar" data-responsive-toggle="main-menu" data-hide-for="medium">
                    <button class="menu-icon columns" type="button" data-toggle="main-menu"></button>                
            </div>
            
            <nav id="main-menu" class="row">
                <ul class="menu columns small-12 vertical medium-horizontal expanded">
                    <li id="homeScroll">HOME</li>
                    <li id="aboutScroll">ABOUT</li>
                    <li id="portfolioScroll">PORTFOLIO</li>
                    <li id="contactScroll">CONTACT</li>
                </ul>           
            </nav>
        </header> -->

        <header>
                <div class="title-bar hide-for-medium">
                        <button class="menu-icon columns" type="button" v-on:click="hideMenu()" id="myMenu"></button>                
                </div>
                
                <nav id="main-menu" class="row hidden">
                    <ul class="menu columns small-12 vertical expanded">
                        <li id="homeScroll"><a href="#home">HOME</a></li>
                        <li id="aboutScroll">ABOUT</li>
                        <li id="portfolioScroll">PORTFOLIO</li>
                        <li id="contactScroll">CONTACT</li>
                    </ul>           
                </nav>
                <nav class="row">
                <ul class="menu columns small-12 hide-for-small-only horizontal expanded text-center">
                        <li id="homeScroll">HOME</li>
                        <li id="aboutScroll">ABOUT</li>
                        <li id="portfolioScroll">PORTFOLIO</li>
                        <li id="contactScroll">CONTACT</li>
                    </ul> 
                    </nav>
            </header>

            <div class="preloader"></div>
    <!-- Home/Promo page -->
        <section id="home" class="row sectionContainer">
                
            <h2 class="hidden">Promo Section</h2>
            <p class="columns small-8 text-center">My inspiration " <span class="promoText"> {{ promoText }} </span>"</p>
            <input type="button" class="columns small-4 button myButton small-centered" v-on:click="showPromoReel()" value="WATCH REEL">
        </section>  



        <section class="row reelLightbox" >
                <span class="close-lightbox" v-on:click="closeLightBox">X</span>    
                <video class="row small-12" id="myVideo">
                    <source src="video/finalreel.mp4" type="video/mp4"/>
                    <source src="video/finalreel.webm" type="video/webm"/>
                    <source src="video/finalreel.ogg" type="video/ogg"/>
                </video>
    
                <div class="controls row">
                    <img id="play" class="columns ppause small-offset-3 large-offset-3 small-1 large-1" src="images/pause.svg" alt="playbutton">
                    <img id="mute" class="columns  small-1 large-1" src="images/mute.svg" alt="mutebutton">
                    <img id="volup" class="columns  small-1 large-1" src="images/vol_up.svg" alt="volumeup">
                    <img id="voldown" class="columns  small-1 large-1" src="images/vol_down.svg" alt="volumedown">
                    <img id="fullscreen" class="columns  small-1 large-1" src="images/fullscreen.svg" alt="fullscreen">
                 </div>
    
        </section> 




        <!-- About page -->
        <section id="about" class="row sectionContainer">
            <h2 class="columns small-12 text-center heading"> {{ aboutTitle }}</h2>           
                <div class="columns small-12" v-for="about in aboutdata">  

                    <div class="columns small-12 medium-4">
                        <img id="profileImg" class="columns small-8  medium-12" :src="'images/'+about.image" alt="profileimage">
                    </div>

                    <div class="columns small-12 text-center medium-8">
                        <p class="columns myDesc small-12">{{ about.description }}</p>
                    </div>
                   
                    <h3 class="columns small-6 text-center">What Can I Do.</h2>

                    <div class="columns small-12 medium-6">
                        <object class="columns small-6 design small-offset-3" data="images/design.svg" type="image/svg+xml"></object>
                        <p class="columns text-center">{{designSkills}}</p>
                    </div>
                        
                    <div class="columns small-12 medium-6">
                        <object class="columns small-6 small-offset-3" data="images/developer.svg" type="image/svg+xml"></object>
                        <p class="columns text-center">{{developerSkills}}</p>
                    </div>
                  
                </div>        
        </section>


        <!-- Portfolio section of my work -->
        <section id="portfolio" class="row sectionContainer">
            <h2 class="columns small-12 text-center"> {{ workTitle }}</h2>
            <p id="workText" class="columns small-8 text-center">Check out some of my work which I did recently</p>
                
            <div id="houseImages">
                    <div class="columns small-12 medium-6"  v-for="work in workdata">
                        <!-- <h3 class="workImageHeading text-center">{{work.work_title}}</h3>                             -->
                        <div class="box">
                            <img class="showLightbox" v-on:click="showLightBox(work)" :data-offset="work.work_id" :src="'images/'+work.work_thumbnail" alt="workimage">                        
                        </div>
                    </div>
                </div>
        </section>  


        <!-- LightBox stuff which is hidden by default -->
        <section class="lightbox">
                <span class="close-lightbox" v-on:click="closeLightBox">X</span>                

                <div class="columns small-12 large-4 large-offset-1">
                    <img src="" id="lightbox-image">
                </div>

                <div id="workInfo" class="columns small-12 large-7">   
                    <h2 class="columns small-12" id="workHeading">{{workhead}}</h2>             
                    <p class="columns small-12" id="workDesc">{{workdesc}}</p>
                    <a class="columns small-3 worklink" :href="worklink" target="_blank"><img class="columns small-8" src="images/repo.svg"></a>   
                    <a class="columns small-6 text-left" :href="productlink" target="_blank">View Product</a>     
                </div>

        </section>

        <!-- Contact page link -->
        <section id="contact" class="row sectionContainer">
            <h2 class="columns small-12 text-center">CONTACT</h2>
            <p class="columns small-12 text-center">Send your ideas or suggessitions here!</p>
            <?php if(isset($_Get['status']) && $_GET['status'] ==='success'):
        header('/index.html');
?>
<?php endif;?>

<?php if(isset($_Get['status']) && $_GET['status'] ==='error'):?>
	<p>Form is missing required fields</p>
<?php endif;?>

    <form class="formBox" action="./admin/scripts/sendEmail.php" method="post">
    <span ><a href="index.html" class="close-contact">X</a></span>                

        <h2>CONTACT ME</h2>
        <input type="text" name="" placeholder="NAME">
		<input type="email" name="email" placeholder="Email">
		<textarea name="message" placeholder="Message"></textarea>
		<button type="submit" name="submit">SEND</button>
	</form>
            <a href="contact.php"><input class="columns small-4 small-offset-4 button myButton" type="button" value="REACH ME"></a>
        </section>

        <footer class="row">

            <div class="columns small-4 text-center">
                <h3 class="footerHead">PATEL ABHISHEK</h3>
                <label class="subData text-left">INTERACTIVE MEDIA DESIGN</label>
                <label class="subData text-left">BECHELOR IN COMPUTER APPLICATIONS</label>
                <label class="subData text-left">Interest: FRONT-BACK END DEVELOPING</label>
            </div>
            <div class="columns small-4 medium-4">
                    <a href="https://github.com/abhishek029" target="_blank"><img class="small-4 small-offset-4" src="images/repo.svg"></a>
                </div>
            <div class="columns small-4 text-center">
                <h3 class="footerHead">Education</h3>
                <label class="subData text-left">FANSHAWE COLLEGE</label>
                <label class="subData text-left">DOWNTOWN CAMPUS</label>
                <label class="subData text-left">137 DUNDAS STREET</label>
            </div>
        </footer>

    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
    <script src="js/vendor/foundation.js"></script>
    <script src="js/main.js"></script>
    <script src="js/promo.js"></script>
</body>
</html>