(()=> {
    const vm = new Vue({
        el: '#app',

        data: {
            promoText : "EVEN A SINGLE DOT CAN BE CODED IN MULTIPLE WAYS",
            aboutTitle : "ABOUT ME",
            workTitle : "PORTFOLIO",
            aboutdata : [],
            workdata : []
        },

        created : function() {
            console.log("fetch all data from database");
            this.fetchAllData();
        },

        methods : {

        // function for grabbing all data from database
            fetchAllData() {         
                console.log("fetchAllData function called");
                
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
            }
        }
    });
})();