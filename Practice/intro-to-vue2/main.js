var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        desc: 'Nice shiny socks',
        image: './assets/vmSocks-green.png',
        href: 'http://www.google.com',
        inventory: 2,
        onStock: true,
        onSale: true,
        details: ["80% cotton","20% polyester","Gender-neutral"],
        variants: [
            {
                variantId: 1234,
                variantColor: "green"
            },
            {
                variantId: 1235,
                variantColor: "red"
            }
        ],
        sizes: ["small", "medium", "large"]
    }
})