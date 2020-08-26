new Vue({
    el: '#app',
    data: {
        attachRed: false,
        color: 'green',
        width: 50
    },
    computed: {
        divClasses: function() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        },
        myStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            }
        }
    }

    
})