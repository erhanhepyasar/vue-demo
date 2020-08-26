new Vue({
    el: '#exercise',
    data: {
        name: 'Erhan Yasar',
        age: 39,
        imageUrl: 'https://cdn.britannica.com/s:700x500/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg'
    },
    methods: {
        getRandomNumber: function() {
            return Math.random()
        }
    }
})