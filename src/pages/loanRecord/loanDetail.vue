<template>
  <div class="loanDetail">
    <div class="loan-detail-list" v-for="item in dataList" :key="item.index">
      <div>
        <span>{{item.name}}</span>
      </div>
      <div>
        <span>{{item.num}}</span>
      </div>
    </div>

    <div class="loan-detail-list">
      <div>
        <span>还款计划</span>
      </div>
      <div>
        <span style="color: #27c96a" @click="lookAll">查看</span>
      </div>
    </div>

    <mu-bottom-sheet :open="loanAll" >
      <div class="loan-detail-bottom-sheet" :class="{'over-background': packBackType}">
        <div class="pickerHeaderd">
          <mu-flat-button label="取消" class="demo-flat-button pickerLeft" @click="pickerCancel"></mu-flat-button>
          <mu-flat-button class="demo-flat-button pickerRight" @click="pickerCancel"></mu-flat-button>
          <span>还款计划</span> <br>
          <span>(共{{times}}期)</span>
        </div>

        <div class="pay-back-plan-list">
          <div>
            <span>1/12期</span> <br>
            <span>2017-04-06借</span>
          </div>
          <div>
            <span :class="{'orange': true}">已还清</span> <br>
            <span>￥213.09</span>
          </div>
        </div>
      </div>
    </mu-bottom-sheet>

  </div>
</template>

<script>
 const dataArr = [
   {index:1,name:'借款编号'},
   {index:2,name:'借款时间'},
   {index:3,name:'借款金额(元)'},
   {index:4,name:'当前日利率(%)'},
   {index:5,name:'借款期限(月)'},
   {index:6,name:'还钱方式'},
   {index:7,name:'放款日期'},
   {index:8,name:'终止日期'},
   {index:9,name:'还款账户'},
 ];
 const numberArr = {
   'a':121,
   's':122,
   'd':122,
   'c':132,
   'x':142,
   'q':121,
   'w':15512,
   'e':112,
   't':1652,
 };
export default {
  data() {
    return {
      //外部列表
      dataList: dataArr,
      //是否已经还清
      packBackType: true,
      //查看全部数据底部弹出框
      loanAll: false,
      //共多少期
      times:'1'
    }
  },
  methods: {
    lookAll() {
      this.loanAll = true;
    },
    pickerCancel() {
      this.loanAll = false;
    }
  },
  beforeMount() {
    for(let item of dataArr) {
      switch (item.index) {
        case 1:
          item.num = numberArr.a;
          break;
        case 2:
          item.num = numberArr.s;
          break;
        case 3:
          item.num = numberArr.t;
          break;
        case 4:
          item.num = numberArr.d;
          break;
        case 5:
          item.num = numberArr.c;
          break;
        case 6:
          item.num = numberArr.x;
          break;
        case 7:
          item.num = numberArr.q;
          break;
        case 8:
          item.num = numberArr.w;
          break;
        case 9:
          item.num = numberArr.e;
          break;
      }
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.over-background{
  background-image: url('./../../assets/image/zhang@2x.png');
  background-repeat: no-repeat;
  background-position: 104% -10px;
  background-size: 80px 80px;
}
</style>
