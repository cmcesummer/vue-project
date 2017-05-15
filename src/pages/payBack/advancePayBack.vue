<template>
  <div class="advancePayBack">
    <div class="gray">
      提前还清借款 {{checkBox}}
    </div>
    <div class="list">
      <div class="advance-list">
        <div>
          <mu-checkbox nativeValue="1" iconClass="iconClass" v-model="checkBox"></mu-checkbox>
        </div>
        <div>
          <span>借款 ￥5000</span> <br>
          <span>2017-04-01</span>
        </div>
        <div>
          <span>应还 ￥5439.9</span>
        </div>
      </div>

      <div class="advance-list">
        <div>
          <mu-checkbox nativeValue="2" iconClass="iconClass" v-model="checkBox"></mu-checkbox>
        </div>
        <div>
          <span>借款 ￥5000</span> <br>
          <span>2017-04-01</span>
        </div>
        <div>
          <span>应还 ￥5439.9</span>
        </div>
      </div>

      <div class="total-advance-list">
        <div>
          <mu-checkbox label="全选" iconClass="iconClass" labelClass="labelClass" v-model="checkBoxs" @change="checkAll"></mu-checkbox>
        </div>
        <div>
          <span>总计 <span>￥2345.32</span></span> <br>
          <span>提前还款将收取手续费</span>
          <mu-icon-button class="question-mark"  style="width:1rem;height:1rem;" @click="openDialog"></mu-icon-button>
        </div>
      </div>

    </div>

    <div class="nextStep">
      <mu-raised-button label="还款" class="demo-raised-button will-loan-btn" fullWidth @click="advancePayBtn"></mu-raised-button>
    </div>

    <!--手续费-->
    <mu-dialog :open="dialog" >
      手续费 = 提前还款本金 * 0.5%
      <mu-flat-button label="我知道了" slot="actions" primary @click="closeDialog"></mu-flat-button>
    </mu-dialog>

    <!--还款明细-->
    <mu-bottom-sheet :open="payBackDetail" >
      <div class="all-pay-back-bottom-sheet">
        <div class="pickerHeaderd">
          <mu-icon-button class="cancel-sheet pickerLeft" style="width:1rem;height:1rem;" @click="detailCancel"></mu-icon-button>
          <span>还款</span>
        </div>

        <div class="pay-back-total">
          <div class="list">
            <div>
              <span>还款金额</span>
            </div>
            <div>
              <span class="money" style="font-size:0.5rem">￥1891.09</span>
            </div>
          </div>
        </div>

        <div class="pay-back-plan-list">
          <div>
            <span>支付方式</span>
          </div>
          <div style="padding-right:0.3rem;">
            <span>招商银行借记卡</span>
          </div>
        </div>
        <div class="pay-back-plan-list" style="border-bottom: 1px solid #e3e3e3">
          <div>
            <span>持卡人</span>
          </div>
          <div style="padding-right:0.3rem;">
            <span>**名</span>
          </div>
        </div>

        <div style="padding:0.3rem 1rem;">
          <mu-raised-button label="立即支付" class="demo-raised-button pay-now-btn" fullWidth @click="payNowBtn"></mu-raised-button>
        </div>
      </div>
    </mu-bottom-sheet>

    <!--付款页面-->
    <mu-bottom-sheet :open="showPassword" @close="closeBottomSheet">
      <pay-password v-if="showPassword"></pay-password>
    </mu-bottom-sheet>




  </div>
</template>

<script>
  import PayPassword from '@/components/KeyBoard'
  export default {
    components: {
      PayPassword
    },
    computed: {
      passwordInputOver() {
        return this.$store.state.passwordInputOver;
      }
    },
    data () {
      return {
        checkBox: [],
        checkBoxs: false,
        //手续费
        dialog: false,
        //还款明细
        payBackDetail: false,
        //支付页面
        showPassword: false
      }
    },
    methods: {
      checkAll() {
        if(!this.checkBoxs) {
          this.checkBox = [];
          this.checkBox.push('1');
          console.log(this.checkBox);
        } else {
          this.checkBox = [];
        }
      },
      //关闭手续费
      closeDialog() {
        this.dialog = false
      },
      openDialog() {
        this.dialog = true;
      },
      //提前还款Btn
      advancePayBtn() {
        this.payBackDetail = true;
      },
      //关闭还款明细
      detailCancel() {
        this.payBackDetail = false;
      },
      //立即支付
      payNowBtn() {
        this.payBackDetail = false;
        this.showPassword = true;
      },
      //关闭支付页面
      closeBottomSheet() {
        this.showPassword = false;
      }

    },
    watch: {
      passwordInputOver(newVal) {
        if(newVal) {
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
  .question-mark{
    background: url(./../../assets/image/wenhao@2x.png);
    background-size: 0.5rem 0.5rem;
    background-repeat: no-repeat;
    background-position: center;
  }
  .cancel-sheet{
    background: url(./../../assets/image/cha@2x.png);
    background-size: 0.5rem 0.5rem;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
