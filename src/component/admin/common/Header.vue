<template>
  <el-dropdown trigger="click" class="header">
    <span class="el-dropdown-link">
      你好，{{uname}}
      <i class="el-icon-caret-bottom el-icon--right"></i> 功能
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>修改密码</el-dropdown-item>
      <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  data() {
    return {
      uname: "admin"
    };
  },
  methods: {
    logout() {
      this.$http.get(this.$api.logout).then(res => {
        // console.log(res);
        if (res.data.status == 0) {
          // //退出成功
          // this.$alert('success');
          // this.$router.push('login');
          this.$confirm("是否确认退出?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
            this.$message({
              type: "success",
              message: "退出成功!"
            });
            this.$router.push("/login");
          });
        } else {
          this.$alert("err");
        }
      });
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  background: #fafafa;
}
.el-dropdown-link {
  float: right;
}
.el-dropdown-link:hover {
  cursor: pointer;
}
</style>