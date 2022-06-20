import { createApp } from 'vue';
import router from './routes.js'
import App from './App.vue';
import store from './store/index.js';
import ErrorMessage from './components/ErrorMessage.vue';


const app = createApp(App);

app.component('error-message', ErrorMessage);
app.use(store);
app.use(router);

app.mount('#app');
