import Home from './components/Home.vue';
import Header from './components/Header.vue'

// Lazy loading for improving performans (web-pack implementation) 
// check network tab on browser developer tools to see build.js file sizes are getting smaller
// 'user' for grouping in this case build.js file becomes bigger again
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user')
};
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user')
};
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user')
};
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user')
};

export const routes = [
    { path: '', name: 'home', components: {
        default: Home,
        'header-top': Header
    } },
    { path: '/user', 
        components: {
            default: User,
            'header-bottom': Header
        }, 
        children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                console.log('inside route setup in UserDetail');
                next();
            } },
            { path: ':id/edit', component: UserEdit, name: 'userEdit' }
        ] },
    { path: '/redirect-me', redirect: '/user'},
    { path: '/redirect-you', redirect: {name: 'home'}},
    { path: '*', redirect: '/'}
];