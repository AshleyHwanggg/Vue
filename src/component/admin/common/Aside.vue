<template>
  <div>
    <h3>后台管理系统</h3>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#267cb7" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu v-for="item in menu" :key="item.title" :index="item.title">
        <template slot="title">
          
          <i :class=item.icon></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item v-for="subitem in item.children" :key="subitem.title" :index="subitem.title">
          <router-link :to="subitem.path" class="fontStyle">{{subitem.title}}</router-link>
        </el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          //导航标题
          icon: "el-icon-location",
          title: "账号管理",
          children: [
            { title: "内容管理", path: "/a" },
            { title: "分类管理", path: "/b" },
            { title: "评论管理", path: "/c" }
          ]
        },
        {
          //导航标题
          icon: "el-icon-document",
          title: "类别管理",
          children: [
            { title: "内容管理", path: "/a" },
            { title: "分类管理", path: "/b" },
            { title: "评论管理", path: "/c" }
          ]
        },
        {
          //导航标题
          icon: "el-icon-upload",
          title: "商品管理",
          children: [
            { title: "内容管理", path: "/a" },
            { title: "分类管理", path: "/b" },
            { title: "评论管理", path: "/c" }
          ]
        },
        {
          //导航标题
          icon: "el-icon-upload",
          title: "订单管理",
          children: [
            { title: "内容管理", path: "/a" },
            { title: "分类管理", path: "/b" },
            { title: "评论管理", path: "/c" }
          ]
        },
        {
          //导航标题
          icon: "el-icon-upload",
          title: "文章管理",
          children: [
            { title: "内容管理", path: "/a" },
            { title: "分类管理", path: "/b" },
            { title: "评论管理", path: "/c" }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.fontStyle {
  text-decoration: none;
  color: #fff;
}
i {
  color: #fff;
}
h3{
  color:#fff;
}
</style>