(()=> {
    const vm = new Vue({
        el: "#app",
        data: {
            // variables
            promoText: "EVEN A SINGLE DOT CAN BE CODED IN MULTIPLE WAYS",
            designSkills: "Photoshop, Ilustrator, Indesign, Cinema 4D, After Effects",
            developerSkills: "HTML5, CSS3, SASS, JavaScript, Git,PHP, Java, C, C++, Python,  SQL Database",
            aboutdata : [],
            workdata : [],
            workhead: "",
            workdesc: "",
            worklink: "",
            productlink: ""
        },
        created: function(){
            //called on pageload
            this.fetchAllData();
        },
        methods: {
            // functions
            // function for grabbing all data from database
            fetchAllData() {                         
                fetch(`./includes/index.php`) // pass in the one or many query
                .then(res => res.json())
                .then(data => {                       
                        console.log("got all data from database");
                        console.log(data);
                        this.aboutdata = data[0];
                        this.workdata = data[1];
                })
                .catch(function(error) {
                    console.log(error);
                });
            },
           
            showLightBox(e){
                document.querySelector(".lightbox").classList.add('show-lightbox');
                console.log('image src will be : images/work'+ (e.work_id) +'.jpg');
                
                document.querySelector("#lightbox-image").src = 'images/work'+ (e.work_id) +'.jpg';
                this.workhead = e.work_title;
                this.workdesc = e.work_description;
                this.worklink = e.work_repolink;
                this.productlink = e.work_productlink;
                document.querySelector("body").classList.add('removeScroll');
            },

            closeLightBox(){
                console.log("closeLightBox");
                document.querySelector("body").classList.remove('removeScroll');
                document.querySelector(".lightbox").classList.remove('show-lightbox');                
                // document.querySelector(".reel").classList.add('hidden');
            }
        }
    })
})();
