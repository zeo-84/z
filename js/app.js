import { Loader } from './modules/Loader.js';
import { Router } from './modules/Router.js';
import { Home } from './modules/Home.js';
import { Utils } from './modules/Utils.js';
import { Config } from './config.js';

class App {
    constructor() {
        this.router = new Router();
        this.loader = new Loader();
    }

    init() {
        Utils.log(Config.APP_NAME + ' v' + Config.VERSION + ' starting...');
        this.setupRoutes();
        this.loader.start().then(() => {
            this.router.go('home');
        });
    }

    setupRoutes() {
        this.router.add('home', (container) => {
            const home = new Home(container);
            home.render();
        });
    }
}

const app = new App();
app.init();