<template>
  <div class="setPayPassword">
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


    <div class="password-box">
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
