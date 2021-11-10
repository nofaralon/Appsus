import keepApp from "./apps/keep/pages/keep-app.cmp.js";

const options={
    el: '#app',
    router,
    template: `
        <section>
        <keep-app/>
        <!-- <user-msg/>
        <app-header/> -->
        <!-- <router-view /> -->
        </section>
    `,

components: {
keepApp,
// appHeader,
// userMsg
}

};
new Vue(options);