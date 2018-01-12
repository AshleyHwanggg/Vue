//1.引入vue
import Vue from 'vue';

//2.引入根组件
import App from './component/App.vue';


new Vue({
  el:"#app",
  render:(creatElement=>creatElement(App))
});