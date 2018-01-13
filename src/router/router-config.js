//引入组件
import Login from '../component/Login/Login.vue';
import Register from '../component/Register/Register.vue';

//设置路由配置
export default{
  routes:[
    {name:'login',path:'/login',component:Login},
    {name:'register',path:'/register',component:Register}
  ]
}