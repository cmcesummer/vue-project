<template>
  <div class="currentPayBack">
    <div class="container">

      <div class="header">
        <span>应还金额 </span>
        <span class="borrow-all">
          应还日期
        </span>
      </div>

      <div class="input-money">
        <span>￥</span>
        <span>20,000</span>
      </div>

      <div class="interest-text">
        <span>还款日当天12:00将从招商银行储蓄卡(6088)自动扣款</span>
      </div>

    </div>

    <div class="gray">当期应还明细</div>

    <div class="detail">
      <div class="current-pay-back-list">
        <div>
          <span :class="{'orange': true}">1/12期</span> <br>
          <span>2017-04-06借</span>
        </div>
        <div>
          <span :class="{'orange': true}">￥213.09</span>
          <mu-icon-button class="question-mark" style="width:1rem;height:1rem;" @click="lookDetail"></mu-icon-button>
        </div>
      </div>
      <div class="current-pay-back-list">
        <div>
          <span >1/12期</span> <br>
          <span>2017-04-06借</span>
        </div>
        <div>
          <span >￥213.09</span>
          <mu-icon-button class="question-mark" style="width:1rem;height:1rem;"></mu-icon-button>
        </div>
      </div>
      <div class="current-pay-back-list">
        <div>
          <span :class="{'orange': true}">1/12期</span> <br>
          <span>2017-04-06借</span>
        </div>
        <div>
          <span :class="{'orange': true}">￥213.09</span>
          <mu-icon-button class="question-mark" style="width:1rem;height:1rem;"></mu-icon-button>
        </div>
      </div>
    </div>

    <mu-dialog :open="dialog" >
      <mu-list>
        <mu-list-item title="本金">
          <span slot="right">1{{detail.money}}</span>
        </mu-list-item>
        <mu-list-item title="利息">
          <span slot="right">4{{detail.money}}</span>
        </mu-list-item>
        <mu-list-item title="罚息">
          <span slot="right">2{{detail.money}}</span>
        </mu-list-item>
        <mu-list-item title="违约金">
          <span slot="right">3{{detail.money}}</span>
        </mu-list-item>
      </mu-list>
      <mu-flat-button label="我知道了" slot="actions" primary @click="close"></mu-flat-button>
    </mu-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialog:false,
        detail: {}
      }
    },
    methods: {
      lookDetail() {
        this.dialog = true;
      },
      close() {
        this.dialog = false;
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

  }

</style>
