import { createRouter, createWebHistory } from 'vue-router';
import WindowSize from './components/WindowSize.vue';
import WindowType from './components/WindowType.vue';
import WindowGlass from './components/WindowGlass';
import WindowColor from './components/WindowColor.vue';
import TheBasket from './components/TheBasket.vue';
import WindowVenner from './components/WindowVenner.vue';
import WindowFrames from './components/WindowFrames.vue';
import WindowMuntins from './components/WindowMuntins.vue';
import WindowDiffusers from './components/WindowDiffusers.vue';
import TheSummary from './components/TheSummary.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: WindowType},
        {path: '/windowType', component: WindowType},
        {path: '/windowSize', component: WindowSize},
        {path: '/windowGlass', component:WindowGlass},
        {path: '/windowColor', component: WindowColor},
        {path: '/basket', component: TheBasket},
        {path: '/windowVenner', component: WindowVenner},
        {path: '/windowFrames', component: WindowFrames},
        {path: '/windowMuntins', component: WindowMuntins},      
        {path: '/windowDiffusers', component: WindowDiffusers}, 
        {path: '/summary', component: TheSummary}           
    ]
});

export default router;