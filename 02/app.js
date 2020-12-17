new Vue({
    el: '#app',
    data: {
        title: '`ello',
        link :'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO'
    },
    methods: {
        sayHello :function(){
            this.title = 'maka maka';
            return this.title;
        }
    }
});