<template>
  <div id="app">
    <div class="header">
      <div class="china">
        <a @click="change">{{$t('m.title')}}</a>
      </div>
    </div>
    <div class="login-container">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-main" label-position="left">
        <h3 class="login_title">{{$t('m.name')}}</h3>
        <el-form-item prop="username">
          <el-input class="height60" type="text" v-model="loginForm.username" auto-complete="off" :placeholder="$t('m.user')"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input class="height60" type="password" v-model="loginForm.password" auto-complete="off" :placeholder="$t('m.pass')"></el-input>
        </el-form-item>

        <el-form-item style="width: 100%" class="login_btn">
          <el-button type="primary" style="width: 100%;border: none" @click.native.prevent="handleLogin">{{$t('m.a')}}</el-button>
        </el-form-item>
        <span class="forget">{{$t('m.forget')}}？</span>
      </el-form>
    </div>
  </div>

</template>

<script>
  import {
    mapState
  } from "vuex";
  import {
    mapMutations
  } from "vuex";
  import {
    mapActions
  } from "vuex";
  import {
    mapGetters
  } from "vuex";
  export default {
    name: "App",
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        },
      }
    },
    created() {},
    computed: {
      loginRules() {
        const rules = {
          username: [{
            required: true,
            trigger: 'blur',
            message: this.$t('m.b')
          }],
          password: [{
            required: true,
            trigger: 'blur',
            message: this.$t('m.c')
          }],
        }
        return rules
      }
    },
    methods: {
      change() {
        this.$i18n.locale == 'zh-CN' ? this.$i18n.locale = 'en-US' : this.$i18n.locale = 'zh-CN'
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.$router.push({
              path: '/Index'
            })
          } else {
            return false
          }
        })
      }
    },
  };
</script>

<style scoped="scoped">

  body {
    font-family: "微软雅黑";
    font-size: 14px;
    color: #6b6b6b;
    line-height: 1.8em;
    font-weight: 400;
    background: #ffffff;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    -webkit-font-smoothing: antialiased;
  }

  .header {
    position: fixed;
    width: 1200px;
    left: 50%;
    margin-left: -600px;
    top: 0;
    z-index: 111;
  }

  .header .china {
    background: #409eff;
    font-size: 16px;
    border-radius: 5px;
    height: 30px;
    width: 80px;
    text-align: center;
    text-align: center;
    line-height: 30px;
    margin-top: 20px;
  }

  .header .china a {
    color: #FFF;
    text-decoration: none;
  }

  .login-container {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    overflow: hidden;
    background-image: url(../assets/section6_bg111.jpg);
  }

  .login-container .login-main {
    border-radius: 5px;
    background-clip: padding-box;
    margin: 280px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    -webkit-box-shadow: 0 0 25px #cac6c6;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login-container .login-main .btn-box,
  .login-container .login-main h3 {
    text-align: center;
    margin: 20px 0;
  }

  .login-container .login-main .btn-box,
  .login-container .login-main .el-form-item {
    margin-bottom: 22px;
  }

  .el-form-item .el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
  }

  .el-form-item .el-form-item__content .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
  }

  .el-form-item .el-form-item__content .el-input .el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;
  }
</style>
