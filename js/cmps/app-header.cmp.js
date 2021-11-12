export default {
    template: `
        <header class="app-header main-layout">
            <h3>Appsus</h3>
            <div>
                <nav>
                    <router-link  to="/">Home</router-link> |
                    <router-link  to="/book">Books</router-link> |
                    <router-link  to="/mail">mail</router-link> |
                    <router-link  to="/keep">keep</router-link> 
                </nav>
            </div>
        </header>
    `,
}