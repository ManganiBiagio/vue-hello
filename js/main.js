const { createApp } = Vue;

createApp({
 
  data () {
   
    return {
        nome:"",
        cognome:"",
        msg:"hello",
        imgs:"",
        
    };
    
  },methods:{
    login(){
        this.imgs="imgs/angela-lopez-social-media-manager.jpg";
        this.msg=`Ciao ${this.nome} ${this.cognome}`;
    }
}
}).mount("#app")

