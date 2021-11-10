import homePage from './pages/home-page.cmp.js';
import mailApp from './pages/mail-app.cmp.js';
import keepApp from './pages/keep-app.cmp.js';
import mailDetails from './apps/mail/pages/mail-details.cmp.js';

// import bookApp from '';



const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/mail',
        component: mailApp
    },
    // {
        // path: '/mail/:mailId',
        // component: mailDetails
    // },
    {
        path: '/keep',
        component: keepApp
    }
    // {
    //     path: '/book',
    //     component: bookApp
    // },
];

export const router = new VueRouter({ routes });