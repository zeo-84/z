export const Utils = {
    wait: (ms) => new Promise(r => setTimeout(r, ms)),
    qs: (s) => document.querySelector(s),
    qsa: (s) => document.querySelectorAll(s),
    log: (msg, type='info') => {
        const c = {info:'#4fc3f7',success:'#81c784',warn:'#ffb74d',error:'#e57373'};
        console.log(`%c[ZiSun] ${msg}`, `color:${c[type]};font-weight:bold;`);
    }
};