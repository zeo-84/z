import { Utils } from './Utils.js';
export class Loader {
    constructor() {
        this.screen = Utils.qs('#loading-screen');
        this.fill = Utils.qs('#progress-fill');
        this.percent = Utils.qs('#progress-percent');
        this.progress = 0;
    }
    async start() {
        Utils.log('Loading started...');
        const steps = [
            {target:20, delay:400}, {target:45, delay:600},
            {target:70, delay:500}, {target:90, delay:400}, {target:100, delay:300}
        ];
        for (const s of steps) { await this.animateTo(s.target, s.delay); }
        await Utils.wait(400);
        this.hide();
    }
    animateTo(target, duration) {
        return new Promise(resolve => {
            const interval = 40;
            const inc = (target - this.progress) / (duration / interval);
            const timer = setInterval(() => {
                this.progress += inc;
                if (this.progress >= target) { this.progress = target; clearInterval(timer); this.update(); resolve(); }
                else { this.update(); }
            }, interval);
        });
    }
    update() {
        const v = Math.round(this.progress);
        this.fill.style.width = v + '%';
        this.percent.textContent = v + '%';
    }
    hide() {
        this.screen.classList.add('hidden');
        Utils.log('Loading complete!', 'success');
        setTimeout(() => {
            this.screen.style.display = 'none';
            Utils.qs('#app').style.display = 'block';
        }, 800);
    }
}