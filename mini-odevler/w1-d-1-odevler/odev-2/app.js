const app = Vue.createApp({
  data() {
    return {
      value: "",
      valueSec: "",
      s:["1","2","3"]
  
    };
  },
  methods: {
    alertBox() {
      
      alert()
    },
    saveValue(event) {
      this.value = event.target.value
    },
    changeValue(event){
      if(event.key == "Enter")
     this.valueSec = event.target.value
    }
  }
});
app.mount("#exercise");
