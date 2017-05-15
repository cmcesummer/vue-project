<template>
  <div class="homePage">
    <header-bar title='柚子生活'></header-bar>

    <div class="content background-img">
      <div class="logo">
        <img src="./../../assets/image/slogo@2x.png" alt="slogo" style="width:1rem;height:1rem"> <br>
        <span>可用额度</span>
      </div>

      <div class="timing">
        <div v-if="timing">
          <mu-circular-progress mode="determinate" class="timeCircle" :size="90" color="deepOrange400" :value="value"></mu-circular-progress>
          <div class="timeNum">
            {{timeNum}}
          </div>
        </div>
        <div v-if="timeOver">

          <span>亲，额度计算有点慢，耐心等候一下</span> <br>

          <a>刷新一下试试 </a>
          <span> 或 </span>
          <a> 联系客服</a>

        </div>
      </div>

      <div class="pleaseWait" v-if="timing">
        <span>请稍后，正在为您计算额度</span>
      </div>
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
      value: 0,
      timeNum:10,
      timing: true,
      timeOver: false
    }
  },
  components: {
    HeaderBar
  },
  mounted () {
    this.timer = setInterval(() => {
      this.value += 10;
      this.timeNum -= 1;
      if (this.value === 100) {
        clearInterval(this.timer);
        this.timing = false;
        this.timeOver = true;
        this.$router.push({name: 'ResolveLoan'})
      }
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.background-img {
  background-image: url(./../../assets/image/yin@2x.png);
}
</style>
