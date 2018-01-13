<template>
  <div>
      我是登录页面
  </div>
</template>

<script>
  export default {
    created(){
      this.$http.get(this.$api.islogin).then(res=>{
          console.log(res);
      })
      // console.log(this.$http.get('http://157.122.54.189:9095/admin/account/islogin'));
    }
  }
</script>

<style scoped>

</style>