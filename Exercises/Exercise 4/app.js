var app = new Vue({
  el: '#exercise',
  data: {
    toggleClass: false,
    selectedClass: '',
    classA: 'a',
    classB: 'b',
    selectedClass2: '',
    selectedClass3: '',
    activateClass3: 'true',
    selectedStyle1: 'red',
    selectedColor: 'purple',
    barLen: 0
  },
  computed: {
    myStyle: function() {
      return {
          backgroundColor: this.selectedColor,
      }
  }
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
    },
    startProgress: function() {
      var vm = this;
      console.log('start progress')
      setInterval(function(){
        vm.barLen += 25
      }, 1000)
    }
  }
});
