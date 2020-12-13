const app = Vue.createApp({
    data() {
        return {
            name: "çağrı",
            age: 22,
            random: null,
            times:null,
            img: "https://1.bp.blogspot.com/-1B6U5RBSyDY/Wo_S6JMi38I/AAAAAAAAGlk/mnr4_ecRFrocfjpAYhuw7PVze00vO3AQgCLcBGAs/s1600/28461898_1893440934008819_1020513490_o.png"
        }
    },
    methods: {
        
        multiply() {
            this.times = this.age * 5

        },
        randomNumbers() {
            this.random = (Math.random());
        },
        change(event) {
            this.name = event.target.value;
            
          },
    },
    
})
app.mount("#exercise");