Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
    el : '#app',
    data : {
        showMessage : true,
        message : 'Vue',
        todos: [
            { id: 0, text : 'wake up early' },
            { id: 1, text : 'have a shower' },
            { id: 2, text : 'have a good breakfast' },
            { id: 3, text : 'start studing' }
        ]
    },
    methods: {
        toggleShow: function() {
            this.showMessage = !this.showMessage
        }
    }
});

app.todos.push({ id: 4, text : 'this item was added from the code..'})