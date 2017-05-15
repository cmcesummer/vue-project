<template>
  <div class="homePage">
    <header-bar title='柚子生活'></header-bar>

    <div class="content background-img">
      <div class="logo">
        <img src="./../../assets/image/slogo@2x.png" alt="slogo" style="width:1rem;height:1rem"> <br>
        <span>可用额度</span>
      </div>

      <div class="totalMoney">
        <div class="big">
          <span>￥</span><span>{{bigMoney}}</span>
        </div>
        <span>总额度</span> <span>{{totalMoney}}</span> <span>元</span>
      </div>


      <div class="pay-back">
        <span v-if="typeNum !== '3'">亲：很抱歉，您的{{typeText}}申请经审批未通过，请您稍后再试，我们在这等着您回来哟~ <br> </span>
        <span v-if="typeNum === '3'">
          您的{{applyMoney}}元借款申请正在审核中... <br>
          稍后将电话和您确认借款信息， <br>
          来电号码为 <span style="color:#fa7718">{{telePhone}}</span> ，请注意接听!
        </span>
      </div>

    </div>

    <div class="my-loan" v-if="typeNum === '3'">
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
        //显示金额
        bigMoney: '0.00',
        //总金额
        totalMoney: '0.00',
        //申请贷款的钱数
        applyMoney: '200.00',
        // 电话号码
        telePhone: '010-87690453',

        typeText: '', // params 对应文本
        typeNum: '',  // params 值
        toast: ''
      }
    },
    components: {
      HeaderBar
    },
    mounted () {
      this.typeNum = this.$route.params.type;
      switch (this.typeNum) {
        case '1':
          this.typeText = '额度';
          break;
        case '2':
          this.typeText = '借款';
          break;
        default:
          break;
      }
    },
    methods: {
      //查看全部
      allMyLoan() {
        if(this.toast !== '') {
          this.toast.close();
        }
        this.toast = this.Toast('您还没有借款记录');
      },
      //我要借款
      willLoanBtn() {
        this.$router.push({name: 'RejectLoan', params: {type: 1}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .background-img {
    background-image: url(./../../assets/image/yin@2x.png);
  }
</style>
