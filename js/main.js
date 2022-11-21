const { createApp } = Vue;

createApp({
 
  data () {
   
    return {
        nome:"",
        cognome:"",
        msg:"Ciao",
        imgs:"",
        
    };
    
  },methods:{
    login(){
        this.imgs="imgs/angela-lopez-social-media-manager.jpg";
        this.msg+=` ${this.nome} ${this.cognome}`;
    }
}
}).mount("#app");


