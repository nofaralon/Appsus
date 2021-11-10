import homePage from './pages/home-page.cmp.js';
// import mailApp from '';
// import keepApp from '';
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
    // {
    //     path: '/keep',
    //     component: bookAdd
    // }
];

export const router = new VueRouter({ routes });