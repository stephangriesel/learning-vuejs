let whatTemp = Number(prompt("What is the temperature?"))
let app = new Vue({
    el:"#app",
    data: {
        firstName:"Stephan",
        lastName:"Griesel",
        name: "Steph's Vue Tour",
        title: "VueJS Tours",
        // titleHTML: "VueJS <span class='badge'>Tours</span>",
        alert: "This is an alert message! ",
        tours: [
            {title: "Rembrandt Tour", places: ["Rembrandt House", "Paint Spot", "De Waag Castle"], likes:0 },
            {title: "Tulp Tour", places: ["Tulp House", "Tulp Scene", "De Waag Castle"], likes:0},
            {title: "Bridges Tour", places: ["Magere", "Kerk Straat", "Wall Bridge"], likes:0},
        ], 
        dynamicId: 'tour_section',
        dynamicClass: 'tours',
        // disabled: true,
        // disabled: false, // wont render the attribute
        //disabled: null, // wont render the attribute
        // disabled: undefined, // wont render the attribute
        attribute_name:"href",
        url:"https://stephangriesel.com",
        event_name: "click",
        tourTitle: "Steph's Tours is on like donkey kong",
        showTitle: true,
        temp: whatTemp
    },
    methods: {
        runFunction(){
            console.log("test click function")
        },
        getFullName(){
            return this.firstName + " " + this.lastName;
        },
        likeTour(index, event){
            console.log("get event data",event);
            const tour = this.tours[index]
            tour.likes++
            console.log("tour like:", tour.likes)
        },
        addLike(tour){
            console.log("add like: ",tour)
        },
        removeLike(tour,event){
            console.log("remove like:",tour)
            console.log("remove like event:",event)
        }
    }
})