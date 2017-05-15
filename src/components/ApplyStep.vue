<template>
  <div>
    <mu-stepper :activeStep="activeStep">
      <mu-step>
        <mu-step-label class="step">
          <span>身份验证</span>
        </mu-step-label>
      </mu-step>
      <mu-step>
        <mu-step-label class="step">
          <span>基本信息</span>
        </mu-step-label>
      </mu-step>
      <mu-step>
        <mu-step-label class="step">
          <span>工作信息</span>
        </mu-step-label>
      </mu-step>
      <mu-step>
        <mu-step-label class="step">
          <span>联系人信息</span>
        </mu-step-label>
      </mu-step>
    </mu-stepper>

    <!--<div class="stepper">
      <div class="steps" :class="[activeStep >= 1 ? 'actived' : '', activeStep >= 0 ? 'active' : '']">
        <div class="circle" :class="[activeStep >= 0 ? 'activeCir' : '']">
          1
        </div>
        <div class="line"></div>
        <span>身份验证</span>
      </div>
      <div class="steps" :class="[activeStep >= 2 ? 'actived' : '', activeStep >= 0 ? 'active' : '']">
        <div class="line line-left"></div>
        <div class="circle">
          2
        </div>
        <div class="line"></div>
        <span>基本信息</span>
      </div>
      <div class="steps" :class="[activeStep >= 2 ? 'actived' : '']">
        <div class="line line-left"></div>
        <div class="circle">
          3
        </div>
        <div class="line"></div>
        <span>工作信息</span>
      </div>
      <div class="steps" :class="[activeStep >= 3 ? 'actived' : '']">
        <div class="line line-left"></div>
        <div class="circle">
          4
        </div>
        <span>联系人信息</span>
      </div>

    </div>-->
  </div>

</template>

<script>
  export default {
    props:['step'],
    data() {
      return {
        activeStep: this.step
      }
    },
    mounted() {
      //console.log(this.activeStep === 1)
    }
  }
</script>

<style lang="scss" scoped>
  /*.stepper{
    display: inline-block;
    min-width: 320px;
  }
  .steps:first-of-type {
    width: 1.9rem
  }
  .steps:last-of-type {
    width: 1.9rem
  }
  .steps{
    float:left;
    box-sizing: content-box;
    width: 2.4rem;
    display: inline-block;
    position: relative;
    color: #d6dde6;
    span{
      display: block;
      margin-top: 0.15rem;
    }
  }

  .active {
    color: #000000;
  }
  .actived {
    color: #07d07d;
  }
  .activeCir {
    background: #07d07d;
    color: #fff!important;
  }
  .line {
    width: 0.8rem;
    height:1px;
    display: inline-block;
    border-bottom:2px solid #d6dde6;
    position: absolute;
    top:0.435rem;
    right:0;
  }
  .line-left {
    top:0.435rem;
    left:0;
  }
  .circle{
    display: inline-block;
    height: 0.87rem;
    width: 0.87rem;
    font-size: 0.5rem;
    border:1px solid #d6dde6;
    border-radius:0.8rem;
    line-height: 0.87rem;
    color:#d6dde6;
  }*/
  .step {
    position: relative;
    & > span:last-of-type{
      position: absolute;
      bottom:0;
      left:-9px;
      display: inline-block;
      width:70px;
    }
    &.active> span:last-of-type, &.completed> span:last-of-type{
      color: #07d07d;
    }
  }
</style>
