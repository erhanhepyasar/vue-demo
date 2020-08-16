new Vue({
  el: '#exercise',
  data: {
    toggleClass: false,
    selectedClass: '',
    classA: 'a',
    classB: 'b',
    selectedClass2: ''
  },
  methods: {
    startEffect: function() {
      var vm = this;
      console.log('startEffect')
      setInterval(function() {
        vm.toggleClass = !vm.toggleClass;
        vm.selectedClass = vm.toggleClass ? 'highlight' : 'shrink';
        console.log('interval - ' + vm.selectedClass)
      }, 1000)
    }
  }
});
