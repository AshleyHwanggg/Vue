<template>
	<el-container class="admin">
		<!-- 页面左侧 -->
		<el-aside width="200px">
			<Aside></Aside>
		</el-aside>
		<!-- 页面右侧 -->
		<el-container>
			<!-- 头部 -->
			<el-header>
				<Header></Header>
			</el-header>
			<el-main>
				<!-- main主体 通过路由控制 -->
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>

</template>

<script>
//引入组件
import Aside from "./common/Aside.vue";
import Header from "./common/Header.vue";
export default {
  // 创建子组件
  components: {
    Aside,
    Header
  }
};
</script>

<style scoped>
.admin {
  height: 100%;
}
.el-header {
  background-color: #fafafa;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #267cb7;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>