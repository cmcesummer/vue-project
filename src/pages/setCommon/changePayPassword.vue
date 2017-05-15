<template>
  <div class="setPayPassword">
    <div class="remember-header">
      您是否记得账号 <span> 131****2540</span>
      <br>
      当前使用的交易密码
    </div>

    <div class="rem-btn-box">
      <mu-raised-button label="不记得" class="demo-raised-button rem-btn"></mu-raised-button>
      <mu-raised-button label="记得" class="demo-raised-button rem-btn"></mu-raised-button>
    </div>

    <div class="header">
      为确保是您本人进行操作，请回答安全保护问题 <br>
      姓名: <span class="green">**ming</span>
    </div>

    <div>
      <mt-field label="身份证后6位" placeholder="请输入身份证后6位" v-model="username"></mt-field>
    </div>

    <div class="nextStep">
      <mu-raised-button label="确定" class="demo-raised-button fullBtn" fullWidth @click=""></mu-raised-button>
    </div>

    <div class="header">
      本次操作需要短信确认，请输入 132****3424 <br>
      收到的短信验证码
    </div>

    <div>
      <mt-field label="验证码" placeholder="请输入验证码" v-model="captcha">
        <mu-flat-button label="获取" class="demo-flat-button get-verti-code"></mu-flat-button>
      </mt-field>
    </div>


    <div class="nextStep">
      <mu-raised-button label="下一步" class="demo-raised-button fullBtn" fullWidth @click=""></mu-raised-button>
    </div>

    <div class="remember-header">
      请为账号 <span> 131****2540</span>
      <br>
      设置6位数字交易密码
    </div>


    <div class="password-box" v-if="false">
      <pay-password v-if="showPassword"></pay-password>
    </div>



  </div>
</template>

<script>
  import PayPassword from '@/components/KeyBoard'
  export default {
    computed: {
      passwordInputOver() {
        return this.$store.state.passwordInputOver;
      }
    },
    components: {
      PayPassword
    },
    data() {
      return {
        showPassword: true
      }
    }
  }
</script>

<style lane="scss" scoped>

</style>
