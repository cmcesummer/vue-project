<template>
  <div class="container">
    <div class="password">
      <div class="box" v-for="item in 6">
        <i v-show="item <= passwordLength"></i>
      </div>
    </div>

    <div class="key-board">

      <div class="zh-grid" v-for="item in keyBoard"
           :class="[(item === '' || item === '-1') ? 'gray' : '', item === '-1' ? 'back' : '']"
           @click = "keyBoardDown(item)"
      >
        {{(item==='' ||item === '-1') ? '' : item}}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      keyBoard: ['1', '2', '3', '4', '5', '6', '7', '8', '9', "", '0', '-1'],
      password: [],
      passwordLength: 0
    }
  },
  methods: {
    keyBoardDown(val) {
      if(Number(val) >= 0) {
        this.password.push(val);
      } else if(val === '-1') {
        this.password.pop()
      }
    }
  },
  watch: {
    password(newVal) {
      console.log(newVal);
      this.passwordLength = newVal.length;
      if(newVal.length === 6) {
        this.$store.commit('changePasswordInputOverTrue')
      }
    }
  }

}
</script>

<style lang="scss" scoped>
  .container {

    text-align: center;
    position: relative;
    overflow: hidden;
    .password {
      padding: 0.5rem;
      .box {
        display: inline-block;
        border:1px solid #e5e5e5;
        box-sizing: border-box;
        font-size: 1rem;
        width: 1.1rem;
        height: 1rem;
        line-height: 1rem;
        margin-right:0.1rem;
        i {
          display: block;
          width: 0.4rem;
          height: 0.4rem;
          margin:0.3rem auto;
          border-radius: 0.4rem;
          background-color: #000;
        }
      }
    }
    .key-board {
      position: relative;
      overflow: hidden;
      &:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #D9D9D9;
        color: #D9D9D9;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
      }
      .zh-grid {
        position: relative;
        float: left;
        width: 33.33%;
        box-sizing: border-box;
        font-size: 16px;
        height: 64px;
        line-height: 64px;
        text-align: center;
        &:active {
          background-color: #e5e5e5;
        }
        &:before {
          content: " ";
          position: absolute;
          right: 0;
          top: 0;
          width: 1px;
          bottom: 0;
          border-right: 1px solid #D9D9D9;
          color: #D9D9D9;
          -webkit-transform-origin: 100% 0;
          transform-origin: 100% 0;
          -webkit-transform: scaleX(0.5);
          transform: scaleX(0.5);
        }
        &:after {
          content: " ";
          position: absolute;
          left: 0;
          bottom: 0;
          right: 0;
          height: 1px;
          border-bottom: 1px solid #D9D9D9;
          color: #D9D9D9;
          -webkit-transform-origin: 0 100%;
          transform-origin: 0 100%;
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
        }
      }
      .gray {
        background-color: #e3e3e3;
      }
      .back {
        background-image: url(./../assets/image/deleteKey.png) ;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 35px;
      }
    }
  }



</style>
