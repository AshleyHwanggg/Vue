<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>商城管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>内容管理</el-breadcrumb-item>
    </el-breadcrumb>

    <div style="margin: 20px 0">
      <el-button size='mini' icon='el-icon-circle-plus-outline' plain>新增</el-button>
      <el-button size='mini' icon='el-icon-circle-check' plain>全选</el-button>
      <el-button size='mini' icon='el-icon-delete' plain>删除</el-button>
      <el-input  style='width:160px;float:right;' size='mini' placeholder="请输入内容" suffix-icon="el-icon-search">
      </el-input>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>