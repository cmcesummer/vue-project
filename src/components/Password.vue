<template>
  <div class="container">
    <input type="password" v-focus="isfouce" id="passNumOne" v-model="passNumOne">

    <div class="box" @click="clickInput"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>
<script>

  export default {
    props: ['isfouced', 'isClose'],
    data() {
      return {
        passNumOne:'',
        isfouce: false,

      }
    },
    directives: {
      focus: {
        update: function (el, binding) {
          if (binding.value) {
            el.focus()
          }
        }
      },
      blur: {
        update: function(el, binding) {
          if(binding.value) {
            el.blur()
          }
        }
      }
    },
    methods: {
      clickInput() {
        this.isfouce = true;
      },
      isBlur() {
        this.isfouce = false;
      }
    },
    watch: {
      passNumOne(val) {
        if(val.length === 6) {

          document.getElementById('passNumOne').blur();
        }
      },
      isClose(val) {
        console.log(val);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 0.5rem;
    text-align: center;
    position: relative;
    overflow: hidden;

    input {
      height: 1rem;
      position: absolute;
      width: 7.7rem;
      background: rgba(0,0,0,0);
      border:none;
      letter-spacing: 1rem;
      padding:0.1rem;
      font-size:0.5rem;
    }
    .box {
      display: inline-block;
      border:1px solid #e5e5e5;
      padding:0.35rem;
      width: 1.1rem;
      height: 1rem;
      font-size: 0.5rem;
    }
    .upper{
      position: absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
    }
  }

</style>
