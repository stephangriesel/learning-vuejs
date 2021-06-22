const app = Vue.createApp({
    data(){
        return {
        showBooks: true,
        title: "Nice book",
        author: "Piet Pompies",
        age: 43,
        x:0,
        y:0
    }
    },
    methods: {
        changeTitle(title){
            // this.title = "This is an even nicer book"
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log("handle event", e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
}
)

app.mount("#app")