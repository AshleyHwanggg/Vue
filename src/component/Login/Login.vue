<template>
  <div class="loginBox">
      <h3>商城后台管理系统</h3>
      <!-- model是用来关联表单总数据  ref是用来获取dom元素 -->
      <el-form label-position="left" label-width="80px" :model="formAllName" ref="ruleForm2" :rules="rules">
          <el-form-item label="用户名" prop="uname">
            <!-- v-model 用来关联不同字段的数据 -->
            <el-input v-model="formAllName.uname"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="upwd" >
            <el-input v-model="formAllName.upwd" type="password"></el-input>
          </el-form-item> 
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
            <el-button  @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
  export default {
    // created(){
    //   this.$http.get(this.$api.islogin).then(res=>{
    //       console.log(res);
    //   })
    //   // console.log(this.$http.get('http://157.122.54.189:9095/admin/account/islogin'));
    // }
    data(){
      function unameFn(rule, value, callback){
        if(value == ''){
          callback(new Error('请输入用户名'));
        }else{
          callback();
        }
      };

      function upwdFn(rule,value,callback){
        if(value == ''){
          callback(new Error('请输入密码'))
        }else{
          callback();
        }

      }

      return{
        formAllName:{
            uname:'',
            upwd:''
        },
        rules:{
          uname:[
            {required: true, message: '请输入用户名', trigger: 'blur'},
            { min: 5, max: 10, message: '账号长度在 5 到 16 个字符', trigger: 'blur' },
            {validator: unameFn, trigger: 'blur'}
          ],
          upwd:[
            {pattern:/^\w{6,18}$/,message:'密码在长度在6-18位',trigger:'blur'},
            {validator: upwdFn, trigger: 'blur'}
          ]
        }
      }
    },
    methods:{
        login(){
          //发送axios请求接口
          this.$http.post(this.$api.login,this.formAllName).then(res=>{
            // console.log(res);
            if(res.data.status == 0){
                this.$message({
                  message:'登录成功',
                  type:'success'
                });
                this.$router.push({name:'admin'})
            }else{
                this.$alert(res.data.message);
            }
          })
        },
        // 点击提交获取表单内所有的数据进行表单验证
        submitForm(formAllName){
          this.$refs[formAllName].validate(res=>{
             // console.log(this.$refs[formName]);
            // console.log(res);
            //登录成功，跳转到首页,登录失败，重新登录
            if(res){
                this.login();
            }else{
                this.$alert('err,请重新登录');
            }
          })
        },

        resetForm(formAllName){
          this.$refs[formAllName].resetFields();
        }
    }
  }
</script>

<style scoped>
    .loginBox{
      width: 400px;
      height: 200px;
      border:1px solid #fff;
      border-radius: 10px;
      margin:0 auto;
      position: relative;
      top:50%;
      transform:translateY(-50%);
      padding:20px;
    }
    h3{
        text-align: center;
        color:#fff;
        position: absolute;
        top:-60px;
        width:100%;
      }
    /* #fontColor{
      color:#fff;
    }
    .el-form-item__label{
      color:#fff;
    } */
</style>