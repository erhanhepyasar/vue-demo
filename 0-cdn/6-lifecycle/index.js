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
        destroy: function() {
            this.$destroy()
        }
    },

    beforeCreate: function() {
        console.log('beforeCreate()')
    },

    created: function() {
        console.log('created()')
    },

    beforeMount: function() {
        console.log('beforeMount()')
    },

    mounted: function() {
        console.log('mounted()')
    },
    
    beforeUpdate: function() {
        console.log('beforeUpdate')
    },

    updated: function() {
        console.log('updated()')
    },

    beforeDestroy: function() {
        console.log('beforeDestroy()')
    },

    destroyed: function() {
        console.log('destroyed()')
    }
    
})