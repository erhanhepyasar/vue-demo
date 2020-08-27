import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  // mode: 'hash' // default mode using # in url. No need no write this line of code for default behaviour
  mode: 'history' // to not to use # in url. 
  //Need to configure server to return index.html in all cases including 404. See official docs for routing-history
  //web-pack was already configured so
});

router.beforeEach((to, from, next) => {
  console.log('global beforeEach')
  next(); //false, '/path'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
