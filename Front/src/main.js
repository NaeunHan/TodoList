import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/store.js';

import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8080'; 
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*';

const app = createApp(App);

app.config.globalProperties.axios = axios;


app.use(store).mount('#app')

app.config.devtools = true;