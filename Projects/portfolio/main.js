// Create Route components
const Home = {template: '<div>My Portfolio</div>'} 
const Projects = {
    template: `<div> 
         <div v-for="project in projects">
            <h2 class="title">{{project.full_name}}</h2>
            
            <div class="author">
                <img width="50px" :src="project.owner.avatar_url" alt="me">
            </div>
            <div class="view">
                <a :href="project.html_url">View</a>
            </div>
        </div>
    </div>`,
    data(){
        return {
            projects: [],
            perPage: 20,
            page: 1
        }
    }, 
    mounted(){
        
         axios
         .get(`https://api.github.com/users/stephangriesel/repos?per_page=${this.perPage}&page=${this.page}`)
         .then(
            response => {
                //console.log(response);
                this.projects = response.data;
            }
        )
        .catch(error=> {console.log(error);})
    }
} 

// Define new routes
const routes = [
    {path: '/', component: Home},
    {path: '/projects', component: Projects}
]

// Router instance & pass routes
const router = new VueRouter({
    routes: routes
});

// Create & mount instance
let app = new Vue({
    router
}).$mount('#app')

// let app = new Vue({
//     el:'#app',
//     data: {
//         projects:[],
//         perPage:20,
//         page:1
//     },
//     mounted(){

//         axios
//         .get('https://api.github.com/users/stephangriesel/repos?per_page=${this.perPage}&page=${this.page}')
//         .then(
//             response => {
//                 console.log(response);
//                 this.projects = response.data;
//             }
//         )
//         .catch(error => {
//             console.log("We have a problem...",error);
//         })
//     }
// })