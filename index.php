<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Patel Abhi</title>
    <!-- Foundation Link -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.1/css/foundation-float.min.css" rel="stylesheet">
    <!-- CSS Link -->
    <link href="css/main.css" rel="stylesheet">
    <!-- Way Points Link -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.js"></script>
    <!-- TweenMax Link -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
    <!-- Bafflet.js link -->
    <script src="https://cdn.jsdelivr.net/npm/baffle@0.3.6/dist/baffle.min.js"></script>
    <!-- Vue.js Link -->    
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.22/dist/vue.js"></script>
</head>
<body>
    <main id="app">
        <header>
            <div id="sidebar">
                <div class="toggle-btn" onclick="show()">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul>
                    <li><a href="#promoSection">HOME</a></li>
                    <li><a href="#about" class="text-center">ABOUT</a></li>
                    <li><a href="#portfolio">WORK</a></li>
                    <li><a href="">RESUME</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </header>

        <section id="promoSection">
            <div class="container">
                <div class="data">
                    {{promoText}}
                </div>
            </div>
        </section>

        <section id="about">
            <div class="row" v-for="about in aboutdata">
                <h2 class="columns small-12 text-center">ABOUT ME</h2>
                <img id="profileImg" class="columns small-5 medium-2" :src="'images/'+about.image" alt="profileimage">
                   
                <p class="columns small-7  medium-10" id="myDesc">{{ about.description }}</p>

                <h3 class="columns small-10 text-center">What Can I DO.</h3>
                <div class="columns small-12 medium-6 text-center">
                    <object class="columns small-4 design small-offset-4" data="images/design.svg" type="image/svg+xml"></object>
                    <p class="columns small-12">{{designSkills}}</p>
                </div>
                <div class="columns small-12 medium-6 text-center">
                    <object class="columns small-4 small-offset-4" data="images/developer.svg" type="image/svg+xml"></object>
                    <p class="columns small-12">{{developerSkills}}</p>
                </div>
            </div>
        </section> 
         
        <section id="portfolio">
                <div class="row">
                    <h2 class="columns small-12 text-center heading">PORTFOLIO</h2>
                    <p id="workText" class="columns small-12 text-center">Check out some of my work which I did recently</p>
                        
                    <div id="houseImages">
                        <div class=" columns small-6 medium-4" v-for="work in workdata">  
                            <div class="box">
                                <img class="showLightbox" v-on:click="showLightBox(work)" tabindex="6" :data-offset="work.work_id" :src="'images/'+work.work_thumbnail" alt="workimage">                        
                            </div>
                        </div>
                    </div>
                </div>
        </section>   
    
    
        <section class="lightbox">
                <h3 class="hidden">Work Lightbox</h3>
                    <span class="close-lightbox" v-on:click="closeLightBox">X</span>                
    
                    <div class="columns small-12 large-4 large-offset-1">
                        <img src="" id="lightbox-image" alt="lightboxImage">
                    </div>
    
                    <div id="workInfo" class="columns small-12 large-7">   
                        <h4 class="columns small-12" id="workHeading">{{workhead}}</h4>             
                        <p class="columns small-12" id="workDesc">{{workdesc}}</p>
                        <a class="columns small-3 worklink" :href="worklink" target="_blank"><img class="columns small-8" src="images/repo.svg"></a>   
                        <a class="columns small-6 text-left" :href="productlink" target="_blank">View Product</a>     
                    </div>
    
        </section> 
    
        <section id="reel">
            <div class="row">
            <h3 class="hidden">REEL LIGHTBOX</h3>  
                <video class="columns small-12" id="myVideo">
                    <source src="video/finalreel.mp4" type="video/mp4"/>
                    <source src="video/finalreel.webm" type="video/webm"/>
                    <source src="video/finalreel.ogg" type="video/ogg"/>
                </video>
            
                <div class="controls columns">
                    <img id="play" class="columns ppause small-offset-2 large-offset-7 small-2 large-1" src="images/pause.svg" alt="playbutton">
                    <img id="mute" class="columns  small-2 large-1" src="images/mute.svg" alt="mutebutton">
                    <img id="volup" class="columns  small-2 large-1" src="images/vol_up.svg" alt="volumeup">
                    <img id="voldown" class="columns  small-2 large-1" src="images/vol_down.svg" alt="volumedown">
                    <img id="fullscreen" class="columns  small-2 large-1" src="images/fullscreen.svg" alt="fullscreen">
                </div>
            </div>
        </section>
                
            <!-- Contact page link -->
            <!-- <section id="contact" class="row sectionContainer">
                <h2 class="columns small-12 text-center heading">CONTACT</h2>
                <p class="columns small-12 text-center">Send your ideas or suggessitions here!</p>
                <a href="contact.php"><input class="columns small-4 small-offset-4 button myButton" type="button" value="REACH ME"></a>
            </section> -->

            <section id="contact" >

                <h2 class="row contactHead small-12 text-center">REACH ME</h2>
                <?php if(isset($_Get['status']) && $_GET['status'] ==='error'):?>
	                <p>Form is missing required fields</p>
                <?php endif;?>
                
                <form action="./admin/scripts/sendEmail.php" class="row" method="POST" id="contact-form">
                    <input type="text" name="name" class="row form-control" placeholder="Your Name" required>

                    <input type="email" name="email" class="row form-control" placeholder="Your Email" required>
                    
                    <textarea name="message" class="form-control row" placeholder="Message" required></textarea>

                    <input type="submit" class="row submitBtn" value="SEND MESSAGE" name="submit">
                </form>
            </section>

            <footer>
                    <div class="columns small-2">
                        <a href="https://github.com/abhishek029" target="_blank"><img class="" src="images/repo.svg" alt="remoHomeLink"></a>
                    </div>
                <div class="columns small-7 text-left">
                    <h3 class="">PATEL ABHISHEK</h3>
                    <h6 class="">Interective Media Design (Fanshawe College)</h6>
                    <h6 class="">BECHELOR IN COMPUTER APPLICATIONS</h6>
                    <h6 class="">Interest: FRONT-BACK END DEVELOPING</h6>
                </div>
                <div class="columns small-3">
                    <label>437-990-4740</label>
                    <label>patelabhi585@gmail.com</label>
                    <label>Linked in Account Id</label>
                </div>
            </footer>  
    </main>

    <!-- JS Link -->     
    <script src="js/main.js"></script>
    <script src="js/custom.js"></script>  
    <script src="js/promo.js"></script>
    
</body>
</html>