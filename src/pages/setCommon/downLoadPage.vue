<template>
  <div class="down-load">
    <img src="./../../assets/image/down.png" alt="下载">
    <div class="nextStep">
      <mu-raised-button label="立即下载" class="demo-raised-button fullBtn" fullWidth @click=""></mu-raised-button>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .down-load {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow-y: auto;
    background: #f9aa40;
    img{
      width: 100%;
    }
    .nextStep {
      position: absolute;
      width: 100%;
      bottom: 1.2rem;
      left:0;
      padding:0 2rem;
      .fullBtn{
        color: #ffffff;
        height: 1.2rem;
        background: #f9aa40;
        border:2px solid #fff;
        border-radius: 20px;
        font-size:16px;
        font-weight: 600;
      }
    }

  }
</style>
