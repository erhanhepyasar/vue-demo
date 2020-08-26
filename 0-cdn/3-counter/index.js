var vm = new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase: function(step, event) {
            this.counter += step
        },
        reset: function() {
            this.counter = 0;
        },
        updateCoordinates: function(event) {
            this.x = event.clientX
            this.y = event.clientY
        },
        alertMe: function() {
            alert('Pressed Enter or Space')
        }
    }
    
})