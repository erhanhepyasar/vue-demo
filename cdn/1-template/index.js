var vm = new Vue({
    el: '#app',
    data: {
        value: 0,
        message: 'Vue demo'
    },
    computed: {
        output1: function() {
            return ''
        }
    },
    watch: {
        value: function() {
            return value > 5 ? 'GT 5' : 'LTE 5';
        }
    },
    methods: {
        method1: function() {
            return ''
        }
    },   
})