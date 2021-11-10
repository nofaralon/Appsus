import homePage from './pages/home-page.cmp.js';
// import mailApp from '';
import keepApp from './pages/keep-app.cmp';
// import bookApp from '';



const routes = [{
        path: '/',
        component: homePage
    },
    // {
    //     path: '/mail',
    //     component: aboutPage
    // },
    // {
    //     path: '/book',
    //     component: bookApp
    // },
    {
        path: '/keep',
        component: keepApp
    }
];

export const router = new VueRouter({ routes });