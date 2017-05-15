<template>
  <div class="bind-bank-card">
    <header-bar title='绑定银行卡' class="login-header"></header-bar>

    <div class="gray">
      <span>本人身份证信息</span>
    </div>

    <div class="formOne">
      <mt-field label="姓名" placeholder="请输入姓名" v-model="userName"></mt-field>
      <mt-field label="身份证" placeholder="请输入身份证号码" type="number" v-model="idCard"></mt-field>
    </div>

    <div class="gray">
      <span>请绑定持卡人本人的银行卡</span>
      <mu-flat-button class="demo-flat-button open-bank-btn" @click="openBankList">查看银行</mu-flat-button>
    </div>

    <div class="formOne">
      <mt-field label="卡号" placeholder="请输入卡号" @blur.native.capture="blurThis" v-model="bankCardNum" type="number"></mt-field>
      <mt-field v-if="isBankCardTrue" label="开户行" placeholder="开户行名称"  :readonly="true" v-model="bankName"></mt-field>
    </div>

    <div class="gray" style="height:0.5rem;" v-if="isBankCardTrue"></div>

    <div class="formOne" v-if="isBankCardTrue">
      <mt-field label="手机号" placeholder="请输入银行预留手机号" type="tel" v-model="phone">
        <mu-icon-button class="question-mark" style="width:1rem;height:1rem;"></mu-icon-button>
      </mt-field>
      <mt-field label="验证码" placeholder="请输入验证码" v-model="captcha">
        <mu-flat-button label="获取" class="demo-flat-button get-verti-code"></mu-flat-button>
      </mt-field>
    </div>




    <div class="nextStep">
      <mu-raised-button label="绑定" class="demo-raised-button fullBtn" fullWidth @click="bindCardBtn"></mu-raised-button>
    </div>

    <div class="agreement">
      <span>同意 《柚子信用贷贷款服务协议》</span>
    </div>



    <mu-bottom-sheet :open="isOpenBankList" @close="closeBankList">
      <div class="bank-list-title">
        <span>学历</span>
        <mu-flat-button label="确定" class="demo-flat-button pickerRight" @click=""></mu-flat-button>
      </div>
    </mu-bottom-sheet>

  </div>
</template>

<script>
import HeaderBar from '@/components/Header'
export default {
  data() {
    return {
      userName: '',
      idCard: '',
      bankCardNum: '',
      bankName: '',
      phone: '',
      captcha: '',
      isOpenBankList: false,
      isBankCardTrue: false

    }
  },
  components: {
    HeaderBar
  },
  methods: {
    closeBankList() {
      this.isOpenBankList = false;
    },
    openBankList() {
      this.isOpenBankList = true;
    },
    blurThis() {
      console.log(this.bankCardNum);
      this.bankCardNum.length >=10 ? this.isBankCardTrue = true : this.isBankCardTrue = false;
    },

    bindCardBtn() {
      this.$router.push({name: 'LoanMoney'});
      if(this.bankName === '') {
        this.Toast('请输入卡号')
      } else if(this.phone !== '') {

      }
    }

  }
}
</script>

<style lang="scss" scoped>
.question-mark{
  background: url(./../../assets/image/wenhao@2x.png);
  background-size: 0.5rem 0.5rem;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
}

</style>
