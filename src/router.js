import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const footer = () => import(/* webpackChunkName: "tabs" */ './components/footer');

const home = () => import(/* webpackChunkName: "home" */ './views/_home');

const index = () => import(/* webpackChunkName: "tabs" */ './views/_index');
const info = () => import(/* webpackChunkName: "tabs" */ './views/_info');
const user = () => import(/* webpackChunkName: "tabs" */ './views/_user');

const login = () => import(/* webpackChunkName: "user" */ './views/_login');

let routes = [{
    path: '*',
    components: {
        index: home
    },
}];

let user_r = [
    {
        name: 'login',
        path: 'login',
        component: login,
        children: [
            {
                name: 'login2',
                path: 'login',
                component: login,
                children:[
                    {
                        name: 'login3',
                        path: 'login',
                        component: login,
                    }
                ]
            }
        ]
    }
]

let tabs = [{
    name: 'index',
    path: '/index',
    components: {
        node: index,
        footer: footer
    }
}, {
    name: 'info',
    path: '/info',
    components: {
        node: info,
        footer: footer
    }
}, {
    name: 'user',
    path: '/user',
    components: {
        node: user,
        footer: footer
    },
    children: user_r
}]

export default new Router({
    mode: 'history',
    routes: [
        ...routes,
        ...tabs,
    ]
})
