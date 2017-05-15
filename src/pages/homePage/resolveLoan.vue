<template>
  <div class="homePage">
    <header-bar title=''></header-bar>

    <div class="content background-img">
      <div class="logo">
        <img src="./../../assets/image/slogo@2x.png" alt="slogo" style="width:1rem;height:1rem"> <br>
        <span>可用额度</span>
      </div>

      <div class="totalMoney">
        <div class="big">
          <span>￥</span><span>1220</span>
        </div>
        <span>总额度</span> <span>1220</span> <span>元</span>
      </div>

      <div class="detailMoney">
        <div class="waitPay">
          <span class="title">全部待还</span>
          <br>
          <mu-flat-button @click="allToPayBack" class="demo-flat-button money">{{waitPayMoney}}</mu-flat-button>

        </div>
        <div class="waitPay">
          <span class="title">当期应还</span>
          <br>
          <mu-flat-button @click="currentPayMoney" class="demo-flat-button money">{{shouldPayMoney}}</mu-flat-button>
        </div>
      </div>

      <div class="nextStep">
        <mu-raised-button label="我要借款" class="demo-raised-button will-loan-btn" fullWidth @click="willLoanBtn"></mu-raised-button>
      </div>

      <div class="pay-back" v-if="isPayBack">
        <span>还款日为每月6日</span>
        <mu-flat-button  class="demo-flat-button back-money" @click="advancePayBack" rippleColor="green">提前还款</mu-flat-button>
      </div>

    </div>

    <div class="my-loan">
      <span>我的借款</span>
      <span class="look-all" @click="allMyLoan">
          <span>查看全部</span><img src="./../../assets/image/rightjiantou@2x.png" alt="rightArrow">
      </span>
    </div>

    <div class="getPomeloMoney">
      <span>了解柚子信用贷</span>
    </div>
  </div>

</template>

<script>
  import HeaderBar from '@/components/Header'

  export default {
    data() {
      return {
        timing: true,
        timeOver: false,
        waitPayMoney: '201.00',
        shouldPayMoney: '100.00',
        isPayBack: false
      }
    },
    components: {
      HeaderBar
    },
    mounted () {


    },
    methods: {
      //全部待还
      allToPayBack() {
        this.$router.push({name: 'AllPayBack'})
      },
      //当期应还
      currentPayMoney() {
        this.$router.push({name: 'CurrentPayBack'})
      },
      //提前还款
      advancePayBack() {
        this.$router.push({name: 'AdvancePayBack'})
      },
      //查看全部
      allMyLoan() {
//        this.Toast('暂无')
        this.$router.push({name: 'LoanRecord'})
      },
      //我要借款
      willLoanBtn() {
        //this.$router.push({name: 'RejectLoan', params: {type: 1}})
        this.$router.push({name:'BindBackCard'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .background-img {
    background-image: url(./../../assets/image/yin@2x.png);
  }
</style>
