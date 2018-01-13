<template>
  <div>
      <!-- 测试，test test -->
      <router-view></router-view>
       <!-- <el-rate
        v-model="value"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
       </el-rate> -->

       <el-rate
        v-model="value4"
        :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
         void-icon-class="icon-rate-face-off"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        // value:2,
        value4:2 
      },
      icon-classes:['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']
      
    }
  }
</script>

<style scoped>

</style>

