new Vue({
    el:'#app',
    data:{
        counter: 0,
        secondCounter: 0,

    },
    computed:{
        output: function(){
            console.log('Computed')
            return this.counter > 5 ? 'Great 5' : 'Smol 5'
        }

    },
    watch:{
        counter: function(value){
            var vm = this;
            setTimeout(function(){
                vm.counter = 0;
            },2000)
        }
    },
    methods:{
        result:function(){
            console.log('Method')
            return this.counter > 5 ? 'Great 5' : 'Smol 5'
        }
    }

    /*methods:{
        increase: function() {
            this.counter++;
            this.result = this.counter > 5 ? 'Great 5' : 'Smol 5'
        },
        decrease: function() {
            this.counter--;
            this.result = this.counter > 5 ? 'Great 5' : 'Smol 5'
        },
    }*/
});