<template>
  <div class="loanRecord">

    <div class="content">
      <div class="loan-record-list">
        <div class="left">
          <span>2017-09-09</span> <br>
          <span>待还</span>
        </div>

        <div class="right" >
          <span>￥120.39</span>
          <mu-icon-button class="icon-3" slot="left" @click="lookForDetail"></mu-icon-button>
        </div>
      </div>
      <div class="loan-record-list">
        <div class="left">
          <span>2017-09-09</span> <br>
          <span>待还</span>
        </div>

        <div class="right" >
          <span>￥120.39</span>
          <mu-icon-button class="icon-3" slot="left" @click="lookForDetail"></mu-icon-button>
        </div>
      </div>
      <div class="loan-record-list">
        <div class="left">
          <span>2017-09-09</span> <br>
          <span>待还</span>
        </div>

        <div class="right" >
          <span>￥120.39</span>
          <mu-icon-button class="icon-3" slot="left" @click="lookForDetail"></mu-icon-button>
        </div>
      </div>
    </div>


    <!--每一笔详情-->
    <mu-bottom-sheet :open="payBackDetail" >
      <div class="all-pay-back-bottom-sheet">
        <div class="pickerHeaderd">
          <mu-icon-button class="cancel-sheet pickerLeft" style="width:1rem;height:1rem;" @click="pickerCancel"></mu-icon-button>
          <span>待还详情</span>
        </div>

        <div class="pay-back-total">
          <div class="list">
            <div>
              <span>应还金额</span>
            </div>
            <div>
              <span class="money">￥1891.09</span>
            </div>
          </div>
          <div class="list">
            <div>
              <span>应还日期</span>
            </div>
            <div>
              <span>2017-09-09</span>
            </div>
          </div>
          <div class="list">
            <span>从招商银行储蓄卡(6088)自动扣</span>
          </div>
        </div>


        <!--每一笔下的每一期详情-->
        <div class="pay-back-plan-list">
          <div>
            <span>1/12期</span> <br>
            <span>2017-04-06借</span>
          </div>
          <div>
            <span>￥213.09</span>
            <mu-icon-button class="question-mark" style="width:1rem;height:1rem;" @click="lookDetail"></mu-icon-button>
          </div>
        </div>
        <div class="pay-back-plan-list">
          <div>
            <span>1/12期</span> <br>
            <span>2017-04-06借</span>
          </div>
          <div>
            <span>￥213.09</span>
            <mu-icon-button class="question-mark" style="width:1rem;height:1rem;" @click="lookDetail"></mu-icon-button>
          </div>
        </div>
      </div>
    </mu-bottom-sheet>


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
      //每一笔详情页
      payBackDetail: false,
      //每一笔下的每一期期详情页
      dialog: false,
      detail:{}
    }
  },
  methods: {
    //查看每一笔的详情
    lookForDetail() {
      this.payBackDetail = true;
    },
    //每一笔详情取消
    pickerCancel() {
      this.payBackDetail = false;
    },
    //查看每一期的详情
    lookDetail() {
      this.dialog = true;
    },
    //每一期详情取消
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
  .cancel-sheet{
    background: url(./../../assets/image/cha@2x.png);
    background-size: 0.5rem 0.5rem;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
