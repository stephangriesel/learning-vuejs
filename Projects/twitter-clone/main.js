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
        error: "",
        registered: false,
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
        }
    }

});