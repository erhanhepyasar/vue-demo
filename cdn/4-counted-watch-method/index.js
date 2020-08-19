var vm = new Vue({
    el: '#app',
    data: {
        value: 0,
        valueSecond: 0
    },
    computed: {
        checkNumberComputed: function() {
            console.log('checkNumber computed called !')
            return this.valueSecond > 4 ? 'GT 4' : 'LTE 4'
        }
    },
    watch: {
        value: function() {
            var vm = this;
            setTimeout(function() {
                console.log('reset ' + new Date());
                vm.value = 0;
                vm.valueSecond = 0;
            }, 3000)
        }
    },
    methods: {
        checkNumberMethod: function() {
            console.log('checkNumber method called !')
            return this.value > 3 ? 'GT 3' : 'LTE 3'
        }
    }
    
})