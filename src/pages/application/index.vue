<template>
  <div class="application">


    <div class="stepContainer">
      <apply-step :step="activeStep"></apply-step>
    </div>
    <div class="gray"></div>
    <div class="formOne">
      <mt-field label="姓名" placeholder="请输入姓名" v-model="userName"></mt-field>
      <mt-field label="身份证号码" placeholder="请输入身份证号码" type="number" v-model="idCard"></mt-field>
    </div>
    <div class="customer">
      <h3>上传证件照片</h3>
      <div class="contains">
        <div class="picture-out" @click="openCamera">
          <div class="picture picture-man">
            <img src="./../../assets/image/camera@2x.png" alt="camera" style="width:30px;z-index: 100">
          </div>
          <span>身份证人像面</span>
        </div>
        <div class="picture-out" @click="openCamera">
          <div class="picture picture-back">
            <img src="./../../assets/image/camera@2x.png" alt="camera" style="width:30px;z-index: 100">
          </div>
          <span>身份证国徽面</span>
        </div>
        <div class="picture-out" @click="openCamera">
          <div class="picture picture-hand">
            <img src="./../../assets/image/camera@2x.png" alt="camera" style="width:30px;z-index: 100">
          </div>
          <span>手持身份证正面</span>
        </div>
      </div>
    </div>

    <div class="nextStep">
      <mu-raised-button label="下一步" class="demo-raised-button fullBtn" fullWidth @click="nextStep"></mu-raised-button>
    </div>

    <div class="agreement">
      <span>同意 《柚子信用贷贷款服务协议》</span>
    </div>

    <mu-toast v-if="toast" class="msgToast" :message='toastMessage'></mu-toast>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'
import ApplyStep from '@/components/ApplyStep'
import wx from 'weixin-js-sdk'

export default {
  data() {
    return {
      activeStep: 0,
      userName:'',
      idCard:'',
      toast: false,
      toastMessage:'',
    }
  },
  components: {
    HeaderBar,
    ApplyStep
  },
  methods: {
    showToast() {
      this.toast = true;
      if (this.toastTimer) clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
    },
    openCamera(){
      console.log('open')
    },
    nextStep() {
      if(this.commonReg.idCard(this.idCard.toString()) && this.userName !== '') {

      } else if(this.userName === '') {
        this.toastMessage = '请输入姓名';
        this.showToast()
      } else if(!this.commonReg.idCard(this.idCard.toString())) {
        this.$router.push({name:'ApplyInformation'})
        /*this.toastMessage = '请输入正确身份证号';
        this.showToast()*/
      }

      /**/
    }

  }
}
</script>

<style lang="scss" scoped>
 /*@import './../../assets/main.scss';*/
.application {
  .login-header{
    background: linear-gradient(#fa7718, #fa9a1a);
    color:#ffffff;
  }
  .stepContainer{
    padding:0 20px 5px;
  }
  .gray {
    width:100%;
    height: 0.394rem;
    display: block;
    background: #f5f5f5;
  }
  .customer{
    padding:10px 20px;
    h3{
      text-align: left;
      color: #000000;
      font-size: 16px;
    }
    .contains{
      text-align: left;
      padding:10px 0;
    }
    .picture{
      border-radius:5px;
      width:4.2rem;
      height:2.67rem;
      line-height: 2.67rem;
      margin-bottom:10px;
      border: 1px solid #e6e6e6;
    }
    .picture-out{
      display: inline-block;
      text-align: center;
      margin-bottom:10px;
    }
    .picture-out:first-of-type {
      margin-right:0.2rem;
    }
    .picture-man{
      background: url(./../../assets/image/man.png) no-repeat;
      background-size: 4.3rem 2.67rem;
    }
    .picture-back{
      background: url(./../../assets/image/guo.png) no-repeat;
      background-size: 4.3rem 2.67rem;
    }
    .picture-hand{
      background: url(./../../assets/image/shouchi.png) no-repeat;
      background-size: 4.3rem 2.67rem;
    }
  }
  .nextStep{
    padding:0 2rem;
  }
  .fullBtn {
    color: #ffffff;
    background: linear-gradient(to right, #fa9a1a, #fa7718);
    border-radius: 20px;
    margin-top:20px;
    font-size:16px;
  }
  .agreement {
    padding: 10px;
    color: #a3b5cd;
  }


}

</style>
