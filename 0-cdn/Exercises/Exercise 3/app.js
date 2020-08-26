new Vue({
        el: '#exercise',
        data: {
            value: 0,
            duration: 5
        },
        computed: {
            result: function() {
                return this.value == 37 ? 'done' : 'not there yet';
            }
        },
        watch: {
            result: function() {
                var vm = this;
                setTimeout(function() {
                    vm.value = 0;
                    console.log('Value reset')
                }, this.duration * 1000);

            }
        }
    });