new Vue({
    el:'#app',
    data:{
        abc: 'gray',
        width: 100,
    },
    
    computed:{
        myStyle: function(){
            return{
                backgroundColor: this.abc,
                width: this.width + "px",
            };

        }

    }

});