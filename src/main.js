//1.引入vue
import Vue from 'vue';
// 6.导入normalize.css
import 'normalize.css';
//2引入路由
import VueRouter from 'vue-router';
// 5.引入element Ui 并引入样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
//2.1 使用路由插件
Vue.use(VueRouter);
Vue.use(ElementUI);
//2.2 引入路由配置设置
import routerConfig from './router/router-config.js';

//3.引入axios
import axios from 'axios';
//3.3 一配置, 以后所有的请求就会自动使用这个域名
axios.defaults.baseURL = 'http://157.122.54.189:9095';
//3.2为了方便使用，绑定在原型上
Vue.prototype.$http = axios;

//4.引入api配置
import api from './js/api-config.js';
//4.1为了方便使用，绑定在原型上
 Vue.prototype.$api = api;

//1.2引入根组件
import App from './component/App.vue';


new Vue({
  el:"#app",
  render:(creatElement=>creatElement(App)),
  //2.3把路由对象挂载到vue实例对象上
  router:new VueRouter(routerConfig)
});