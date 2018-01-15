//引入组件
import Login from '../component/Login/Login.vue';
import Admin from '../component/admin/admin.vue';
import productCtList from '../component/admin/product-content/productCtList.vue';
import productCtEdit from '../component/admin/product-content/productCtEdit.vue';
import productCgList from '../component/admin/product-category/productCgList.vue';
import productCgEdit from '../component/admin/product-category/productCgEdit.vue';

//设置路由配置
export default{
  routes:[
    //登录
    {name:'login',path:'/login',component:Login},
    //后台管理
    {path:'/',redirect:'admin'},
    {name:'admin',path:'/admin',component:Admin,children:[
    //内容管理
    {name:'productCtList',path:'product_content/list',component:productCtList},
    {name:'productCtEdit',path:'product_content/edit/:id',component:productCtEdit},
    {name:'productCtAdd',path:'product_content/add',component:productCtEdit},

    //分类管理
    {name:'productCgList',path:'product_category/list',component:productCgList},
    {name:'productCgEdit',path:'product_category/edit/:id',component:productCgEdit},
    {name:'productCgAdd',path:'product_category/add',component:productCgEdit}
    

    ]}
    
  ]
}