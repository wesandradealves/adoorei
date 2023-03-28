global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

import { createApp } from 'vue'
import App from './App.vue'
import { createMetaManager } from 'vue-meta'
import { store } from './store'
import router from './router'

createApp(App).use(createMetaManager()).use(store).use(router).mount('#app')
