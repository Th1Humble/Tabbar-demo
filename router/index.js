import Vue from 'vue'
import VueRouter from 'vue-router';

const Home = () =>
    import ('../views/Home')
const Category = () =>
    import ('../views/Category')
const Profile = () =>
    import ('../views/Profile')

Vue.use(VueRouter);

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/profile',
        component: Profile
    },
]
const router = new VueRouter({
    routes
})

export default router