const Component = {
    methods:{

       

        modifInput:function(){

            // inputModif=true
            
            
            console.log("input",inputModif);
        },

        addList:function(){
            inputValue.value
            this.afaire.push(inputValue.value)
            console.log(this.afaire)
            
          
        },
        // inputValue:function(event){
        //     this.afaire=event.target.value
        // },
        changeListEncours:function(index){

            
            // this.afaire.splice(inputValue)
            this.encoure.push(this.afaire[index])// pour recupere un index d'un array il faut les crochet !!!

            this.afaire.splice(index,1)
         
        },

        changeListTermine:function(index){


            this.terminer.push(this.encoure[index])
            this.encoure.splice(index,1)
           
        },

        deletList:function(index){
            this.terminer.splice(index,1)
            console.log("finiiii", this.terminer)
        },


    },
    data(){

        return{
            
            afaire:[],
                
            encoure:[],
            
            terminer:[]
            
        }
    }
            
}



Vue.createApp(Component).mount("#root");