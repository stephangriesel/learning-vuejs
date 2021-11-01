let app = new Vue({
    el:'#app',
    data: {
        projects:[],
        perPage:20,
        page:1
    },
    mounted(){

        axios
        .get('https://api.github.com/users/stephangriesel/repos?per_page=${this.perPage}&page=${this.page}')
        .then(
            response => {
                console.log(response);
                this.projects = response.data;
            }
        )
        .catch(error => {
            console.log("We have a problem...",error);
        })
    }
})