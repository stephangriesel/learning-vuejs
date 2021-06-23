const app = Vue.createApp({
    data(){
        return {
        showBooks: true,
        books: [
            {title: "nice book", author: "nice author"},
            {title: "another nice book", author: "another nice author"},
            {title: "yet another nice book", author: "yet another nice author"}
        ],
        // title: "Nice book",
        // author: "Piet Pompies",
        // age: 43,
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