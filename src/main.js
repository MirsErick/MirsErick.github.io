import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Field, NoticeBar } from "vant";
import VConsole from 'vconsole';
import 'vant/lib/index.css';
import directives from '@/directives'
Vue.use(Button)
Vue.use(Field)
Vue.use(NoticeBar)
// const vconsole = new VConsole();
//注册全局指令
Object.keys(directives).forEach((key)=>{
    Vue.directive(key,directives[key])
})
new Vue({
    render: h => h(App),
    router
}).$mount('#app')
