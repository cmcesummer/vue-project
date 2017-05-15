<template>
  <div class="loanMoney">
    <header-bar title='借款' class="loan-header"></header-bar>

    <div class="container">

      <div class="header">
        <span>最高可借款 <span style="color:#fa7718">{{totalMoney}}</span> 元</span>
        <mu-flat-button label="全部借出" class="demo-flat-button borrow-all" @click="allBorrowBtn"></mu-flat-button>
      </div>

      <div class="input-money">
        <label for="bigMoney"><span>￥</span></label>
        <input type="number" id="bigMoney" v-model="inputMoney" @blur="moneyBlur">
      </div>

      <div class="interest-text">
        <span>按日计息，日利息{{interest}}%</span>
      </div>

    </div>

    <div style="padding:0.2rem;"></div>

    <div class="container" style="padding:0" v-if="isMoneyRight">
      <div class="list">
        <div>
          <span>借款期数</span>
        </div>
        <div>
          <mu-dropDown-menu class="mu-father-height" :value="value" @change="handleChange" labelClass="menuListText" menuClass="meList" underlineClass="underlineClass" iconClass="iconClass">
            <mu-menu-item v-for="item in payTimeList" :value="item.value" :title="item.name" :key="item.value"></mu-menu-item>
          </mu-dropDown-menu>
        </div>
      </div>

      <div class="list">
        <div>
          <span>还款方式</span>
        </div>
        <div>
          <span>{{payType}}</span>
        </div>
      </div>

      <div class="list">
        <div>
          <span>首次还款金额(元)</span>
        </div>
        <div>
          <span>{{firstPayMoney}}</span>
        </div>
      </div>

      <div class="list" style="padding-right:1px;color: #feca87">
        <div>
          <span>首次还款时间：{{firstPayTime}}</span>
        </div>
        <div>
          <span>还款计划</span>
          <mu-icon-button class="icon-3" slot="left" @click="openMarriage"></mu-icon-button>
        </div>
      </div>

      <div class="list">
        <div>
          <span>银行卡</span>
        </div>
        <div>
          <span>{{bankCard}}</span>
        </div>
      </div>

    </div>

    <div class="borrow-btn-sure">
      <mu-raised-button label="确认借钱" class="demo-raised-button fullBtn" fullWidth @click="sureBorrowBtn"></mu-raised-button>
    </div>

    <div class="agreement" v-show="passwordInputOver">
      <span>同意遵守合同及相关借款协议</span>
    </div>


    <!-- password-->
    <mu-bottom-sheet :open="showPassword" @close="closeBottomSheet">
      <pay-password v-if="showPassword"></pay-password>
    </mu-bottom-sheet>

    <!-- 还款计划 -->
    <mu-bottom-sheet :open="openMarriageList" >
      <div class="loan-detail-bottom-sheet" >
        <div class="pickerHeaderd">
          <!--<mu-flat-button label="取消" class="demo-flat-button pickerLeft" @click="pickerCancel"></mu-flat-button>-->
          <mu-icon-button class="cancel-sheet pickerLeft" style="width:1rem;height:1rem;" @click="pickerCancel"></mu-icon-button>
          <span>还款计划</span> <br>
          <span style="color: #fdd5a2">(仅供参考具体计划以实际放款为准)</span>
        </div>

        <div class="pay-back-plan-list">
          <div style="width:30%">
            <span>1/12期</span> <br>
            <span>2017-04-06借</span>
          </div>
          <div style="width:70%">
            <span style="color: #333">￥234.09</span> <br>
            <span style="color: #999">含本金￥213.09，利息￥88.88</span>
          </div>
        </div>
        <div class="pay-back-plan-list">
          <div style="width:30%">
            <span>1/12期</span> <br>
            <span>2017-04-06借</span>
          </div>
          <div style="width:70%">
            <span style="color: #333">￥234.09</span> <br>
            <span style="color: #999">含本金￥213.09，利息￥88.88</span>
          </div>
        </div>
      </div>
    </mu-bottom-sheet>

  </div>
</template>

<script>
import HeaderBar from '@/components/Header'
import PayPassword from '@/components/KeyBoard'

export default {
  computed: {
    passwordInputOver() {
      return this.$store.state.passwordInputOver;
    }
  },
  components: {
    HeaderBar,
    PayPassword
  },
  data() {
    return {
      //关闭密码支付
      thisClose: {'a':1},
      //得到焦点
      idFocue: true,
      //输入密码
      showPassword: false,
      //可借款总数
      totalMoney: '1000.00',
      //输入的钱数
      inputMoney:'',
      //每日利率
      interest: 0.0412,
      //输入钱数正确
      isMoneyRight: false,
      //还款方式
      payType: '等额本息',
      //首次还款金额
      firstPayMoney: '901.79',
      //首次还款时间
      firstPayTime: '20170909',
      //银行卡
      bankCard: '1234******7890',
      //下拉菜单 还款期数
      value: '1',
      //还款计划弹出框
      openMarriageList: false,
      payTimeList:[{value:'1',name:'3个月'},{value:'2',name:'6个月'},{value:'3',name:'12个月'}]
    }
  },
  methods: {
    handleChange (value) {
      this.value = value
    },
    //全部借出
    allBorrowBtn() {
      this.inputMoney = this.totalMoney
    },
    moneyBlur() {
      let money = Number(this.inputMoney),
          totalMoney = Number(this.totalMoney);

      if(money < 500) {
        this.Toast('单笔借款金额最低为500元');
        this.isMoneyRight = false;
      } else if(money > totalMoney) {
        this.Toast('当前最多可借' + totalMoney + '元');
        this.isMoneyRight = false;
      } else if(money % 100 !== 0) {
        this.Toast('借款金额应为100的整数倍');
        this.isMoneyRight = false;
      } else {
        this.isMoneyRight = true;
      }

    },
    closeBottomSheet() {
      this.showPassword = false;
    },
    sureBorrowBtn() {
      this.showPassword = true;
    },
    //还款计划 打开
    openMarriage() {
      this.openMarriageList = true;
    },
    //还款计划关闭
    pickerCancel() {
      this.openMarriageList = false;
    }
  },
  watch: {
    //输入够6位之后触发
    passwordInputOver(val) {
      if(val) {
        this.Indicator.open();
        this.closeBottomSheet();
        this.$store.commit('changePasswordInputOverFalse');
        setTimeout(() => {
          this.Indicator.close();
        }, 1000);
      }
    }
  },
  //组件销毁前改变changePasswordInputOverFalse
  beforeDestory() {
    this.$store.commit('changePasswordInputOverFalse');
  }


}
</script>

<style lang="scss" scoped>

  .mu-father-height {
    height:1rem;
    background-image: url(./../../assets/image/xai@2x.png);
    background-repeat: no-repeat;
    background-position: 90% center;
  }
  .cancel-sheet{
    background: url(./../../assets/image/cha@2x.png);
    background-size: 0.5rem 0.5rem;
    background-repeat: no-repeat;
    background-position: center;
  }

</style>
