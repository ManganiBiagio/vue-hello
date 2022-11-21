const { createApp } = Vue;

createApp({
 
  data () {
   
    return {
        nome:"",
        cognome:"",
        msg:"Ciao",
        imgs:"",
        btnClasses:["btn-primary"]
        
    };
    
  },methods:{
    login(){
        this.msg="";
        this.btnClasses[0]="btn-danger";
        this.imgs="imgs/angela-lopez-social-media-manager.jpg";
        this.msg+=` ${this.nome} ${this.cognome}`;
    }
}
}).mount("#app");


