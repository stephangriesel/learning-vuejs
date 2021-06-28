const app = Vue.createApp({
    data(){
        return {
        url: "https://www.google.com",
        showBooks: true,
        books: [
            {title: "nice book", author: "nice author", img: "assets/1.png", isFav: true},
            {title: "another nice book", author: "another nice author", img: "assets/2.jpg", isFav: false},
            {title: "yet another nice book", author: "yet another nice author", img: "assets/3.jpg", isFav: true}
        ],
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
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
    }
}
)

app.mount("#app")