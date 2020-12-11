var vm = new Vue({
    el: '#app',
    data: {
        title:'maka maka'
    },
    methods: {
        changeTitle: function(event){
            this.title = event.target.value;
        }
    }
});