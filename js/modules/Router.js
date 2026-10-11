import { Utils } from './Utils.js';
export class Router {
    constructor() { this.routes = new Map(); this.app = Utils.qs('#app'); }
    add(name, fn) { this.routes.set(name, fn); }
    go(name) {
        const fn = this.routes.get(name);
        if (fn) { this.app.innerHTML = ''; fn(this.app); Utils.log('Route: ' + name); }
        else { Utils.log('Route not found: ' + name, 'error'); }
    }
}