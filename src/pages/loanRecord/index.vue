<template>
  <div class="loanRecord">

    <div class="loan-record-list" v-for="(item, index) in loanList" :key="index">
      <div class="left">
        <span>{{item.money}}</span> <br>
        <span> 2017-09-09 借</span>
      </div>

      <div class="right" >
        <mu-chip class="demo-chip rightArrow" color="white" :backgroundColor="fnColor(item.type)">
          {{item.type | loanRecordType}}
        </mu-chip>
        <mu-icon-button class="icon-3" slot="left" @click="lookForDetail" v-if="item.type == 1 || item.type == 2"></mu-icon-button>
      </div>
    </div>

  </div>
</template>

<script>

const green = 'green400',
      orange = 'orange500',
      red = 'deepOrangeA200',
      grey = 'grey400';
const dataArr = [{
  money:'2220.00',
  time:'2017-02-02',
  type:'0'
},{
  money:'20.00',
  time:'2017-02-02',
  type:'1'
},{
  money:'22110.00',
  time:'2017-02-02',
  type:'2'
},{
  money:'110.00',
  time:'2017-02-02',
  type:'3'
}];

export default {
  data() {
    return {
      loanList: dataArr
    }
  },
  methods: {
    lookForDetail() {
      this.$router.push({name: 'LoanDetail'})
    },
    fnColor(val) {
      switch(val) {
        case '0':
          return green;
        case '1':
          return orange;
        case '2':
          return red;
        case '3':
          return grey;
        default:
          break;
      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
