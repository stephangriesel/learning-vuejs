let app = new Vue({
    el: '#app',
    data: {
        userData: {},
        usersID: 0,
        name: "",
        email: "",
        password: "",
        max_length: 25,
        max_pass_length: 16, 
        max_update: 200,
        error: "",
        registered: false,
        updateMsg: "",
        update: []
    },
    methods: {
        registerAccount(){
            if (this.name !== "" && this.email !== "" && this.password !== "") {
            // record user details
            this.userData.id = ++this.usersID,
            this.userData.name = this.name,
            this.userData.email = this.email,
            this.userData.password = this.password
            } else {
                this.error = "Complete form fields"
            }

            
            // add registration to localStorage
            localStorage.setItem('simple_update_registered', true)
            localStorage.setItem('simple_update_registered_user', JSON.stringify(this.userData))

            // clear the registration fields
            this.name = "";
            this.email = "";
            this.password = "";
        },
        sendUpdate(){
            /* Store the tweet in the tweets property */
            this.updates.unshift(
                {
                    text: this.updateMsg,
                    date: new Date().toLocaleTimeString()
                }
        
            );
            /* Empty the updateMsg property */
            this.updateMsg = "";
            //console.log(this.updates);
        
            /* Tranform the object into a string  */
            stringUpdates = JSON.stringify(this.updates)
            console.log("convert to update string: ",stringUpdates);
        
            /* Add to the local storage the stringified tweet object */
            localStorage.setItem('simple_update_updates', stringUpdates)
        },
       
    },

    created(){
        /* Check if the user is registered and set the registered to true */
        if(localStorage.getItem("simple_update_registered") === 'true'){
            this.registered = true;
        }
        // repopulate the userData object
         if(localStorage.getItem('simple_update_registered_user')) {
                this.userData = JSON.parse(localStorage.getItem('simple_update_registered_user'))
            }
    
    }

});