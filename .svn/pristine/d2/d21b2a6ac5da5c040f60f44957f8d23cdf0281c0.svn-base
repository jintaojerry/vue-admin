<template>
   <div class="warpper" id="particles">
     <div class="login-container">
       <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm">
            <h3 class="title">服务器运维管理系统</h3>
            <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-checkbox v-model="checked" class="remember" label="记住密码"></el-checkbox>
            <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining" class="login-btn">登录</el-button>
            <!-- <el-button @click.native.prevent="handleReset2">重置</el-button> -->
            </el-form-item>
            <p class="info">
              <span>userName:admin</span>
              <span>passWord:123456</span>
            </p>
        </el-form>
     </div>       
    </div>
  
</template>

<script>
const ADIMN = "admin";
const PASSWORD = 123456;
import particles from "particles.js";
export default {
  data() {
    return {
      logining: false,
      ruleForm2: {
        account: "admin",
        checkPass: "123456"
      },
      rules2: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" }
          //{ validator: validaePass }
        ],
        checkPass: [
          { required: true, message: "请输入密码", trigger: "blur" }
          //{ validator: validaePass2 }
        ]
      },
      checked: false
    };
  },
  created() {
    localStorage.clear();
    let loginParams = JSON.parse(localStorage.getItem("loginParams"));
    if (loginParams === null) {
      return false;
    } else if (loginParams !== null && loginParams.checked === true) {
      this.ruleForm2.account = loginParams.account;
      this.ruleForm2.checkPass = loginParams.pwd;
      this.checked = loginParams.checked;
    }
  },
  mounted() {
    particlesJS.load("particles", "../../../static/particles.json");
  },
  methods: {
    handleReset2() {
      this.$refs.ruleForm2.resetFields();
    },
    handleSubmit2(ev) {
      this.$refs.ruleForm2.validate(valid => {
        // console.log(_this.ruleForm2)
        if (valid) {
          this.logining = true;
          var loginParams = {
            account: this.ruleForm2.account,
            pwd: this.ruleForm2.checkPass,
            checked: this.checked
          };
          if (loginParams.account == ADIMN && loginParams.pwd == PASSWORD) {
            this.$message({
              message: "登录成功",
              type: "success"
            });
            this.$router.push({ path: "/" });
          } else {
            this.logining = false;
            this.$message.error("请输入正确的账号和密码");
          }

          console.log(loginParams);

          // this.$http.post("User/UserLogin", loginParams, res => {
          //   console.log(res);
          //   if (res.code == 0) {
          //     this.$message({
          //       message: "登录成功",
          //       type: "success"
          //     });
          //     this.logining = false;
          //     localStorage.setItem("loginParams", JSON.stringify(loginParams));
          //     this.$router.push({ path: "/" });
          //   } else {
          //     this.logining = false;
          //     this.$message.error(res.retmsg);
          //   }
          // });
        } else {
          this.$message.error("请输入正确的账号和密码");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.warpper {
  // height: 100%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // // background-color: #2d3a4b;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #373d41;
  overflow-y: hidden;
}
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  // margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
.login-btn {
  background-color: #373d41;
  border-color: #373d41;
}
.login-btn:hover,
.login-btn:focus {
  background: #8b8d8e;
  border-color: #8b8d8e;
  color: #fff;
}
.info{
  color: red;
  font-size: 12px;
}
.info>span:first-child{
  margin-right: 70px;
}

</style>

