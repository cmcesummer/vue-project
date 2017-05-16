<template>
  <div>
    <div class="informationListItem">
      <span>入职时间</span>

      <mu-icon-button class="icon-3" slot="left" @click="openWorkTime"></mu-icon-button>
      <span>{{workTimeText | dateFilter('yyyy-MM-dd')}}</span>
    </div>
    <!-- 入职时间 template start-->
    <mu-bottom-sheet :open="workTimeBottomSheet">
      <div class="pickerHeader">
        <mu-flat-button label="取消" class="demo-flat-button pickerLeft" @click="workTimeCancel"></mu-flat-button>
        <span></span>
        <mu-flat-button label="确定" class="demo-flat-button pickerRight" @click="workTimeSure"></mu-flat-button>
      </div>
      <mu-picker :slots="workTimeSlots" :visible-item-count="5" @change="workTimeChange" :values="workTimeValue"/>
    </mu-bottom-sheet>
    <!-- 入职时间 template end -->
  </div>
</template>

<script>
  /*入职时间 控制js start*/
  let year = new Date().getFullYear(),
    month = new Date().getMonth() + 1,
    thisDay = new Date().getDate(),
    getYearArr = () => {
      let arr = [],
        yearNum = year;
      for(let i = 0; i < 40; i++) {
        arr.push(yearNum--)
      }
      return arr
    },
    yearArr = getYearArr(),
    monthArr = [1,2,3,4,5,6,7,8,9,10,11,12],
    getDay = (year, month) => {
      let tMon = [1,3,5,7,8,10,12],
        sMon = [4,6,9,11],
        dayArr = [];
      if(tMon.indexOf(month) !== -1) {
        for(let i = 1; i < 32; i++) {
          dayArr.push(i)
        }
      } else if(sMon.indexOf(month) !== -1) {
        for(let i = 1; i < 31; i++) {
          dayArr.push(i)
        }
      } else if(month === 2 && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)){
        for(let i = 1; i < 30; i++) {
          dayArr.push(i)
        }
      } else {
        for(let i = 1; i < 29; i++) {
          dayArr.push(i)
        }
      }
      return dayArr
    },
    //时间戳转换成数组
    getDateArr = (time) => {
      let times = new Date(Number(time));
      return [times.getFullYear(), times.getMonth() + 1, times.getDate()]
    };
  /*入职时间 控制js end*/

  export default {
    props: ['workTimeProp'],  //年月日的时间戳 --------------
    watch: {
      //外部改变通知内部
      workTimeProp(val) {
        this.workTimeText = val;
      },
      //内部改变通知外部
      workTimeValue(val) {
        let time = new Date(val[0] + '/' + val[1] + '/' + val[2]).getTime();
        this.$emit('on-work-time-change', time)
      }
    },

    data() {
      return {
        workTimeBottomSheet: false ,
        workTimeText: this.workTimeProp  ? Number(this.workTimeProp) : '',
        workTimeValue: this.workTimeProp ? getDateArr(this.workTimeProp) : [year, month, thisDay],
        workTimeSlots: [
          {
            width: '100%',
            textAlign: 'center',
            values: yearArr
          },
          {
            width: '100%',
            textAlign: 'center',
            values: monthArr
          },
          {
            width: '100%',
            textAlign: 'center',
            values: getDay(year, month)
          }
        ]
      }
    },
    methods: {
      openWorkTime() {
        this.workTimeBottomSheet = true;
      },
      workTimeCancel() {
        this.workTimeBottomSheet = false;
      },
      workTimeSure() {
        this.workTimeBottomSheet = false;
        this.workTimeText =  this.workTimeValue[0] + '-' + this.workTimeValue[1] + '-' +this.workTimeValue[2];
        this.workTimeValue = [this.workTimeValue[0], this.workTimeValue[1], this.workTimeValue[2]];
      },
      workTimeChange(value,index) {
        switch (index) {
          case 0:
            this.workTimeValue[0] = value;
            this.workTimeSlots[2].values = getDay(this.workTimeValue[0], this.workTimeValue[1]);
            break;
          case 1:
            this.workTimeValue[1] = value;
            this.workTimeSlots[2].values = getDay(this.workTimeValue[0], this.workTimeValue[1]);
            break;
          case 2:
            this.workTimeValue[2] = value;
            break;
          default:
            break;
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .informationListItem {
    padding:0 0.1rem 0 0.5rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.45rem;
    text-align: left;
    .icon-3{
      font-size: 14px;
      transform: rotate(180deg);
      float:right;
      padding:0;
      height: 1rem;
      width: 1rem
    }
    span:last-of-type{
      float:right;
    }
    input{
      font-size: 12px;
    }
    .inInput{
      float: right;
      width: 200px;
      height: 16px;
      min-height: 10px;
      margin-top: -4px;
    }
    .tel{
      border:none;
      background: #f5f5f5;
      height:20px;
      padding-left:5px;
      float:right;
      margin-top:0.2rem;
      margin-right:0.2rem;
    }
    .telOne{
      margin-left:20px;
      width:40px;
    }
    .telTwo{
      padding-left:10px;
      width:80px;
    }
    .telThree {
      width:50px;
    }
  }
</style>
