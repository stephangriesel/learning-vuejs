var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        desc: 'Nice shiny socks',
        image: './assets/vmSocks-green.png',
        href: 'http://www.google.com',
        inventory: 0,
        onStock: false,
        onSale: true,
        details: ["80% cotton","20% polyester","Gender-neutral"],
        variants: [
            {
                variantId: 1234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green.png"
            },
            {
                variantId: 1235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue.png"
            }
        ],
        sizes: ["small", "medium", "large"],
        cart:0
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        decreaseCart: function () {
            this.cart -= 1
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    }
})