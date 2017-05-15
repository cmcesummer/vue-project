<template>
  <div class="container">

    <input type="password" v-ifocus="isfouce"  v-model="passNumOne">
    <input type="password" v-focus="isfouce2"  v-model="passNumTwo">
    <input type="password" v-focus="isfouce3" v-model="passNumThree">
    <input type="password" v-focus="isfouce4" v-model="passNumFour">
    <input type="password" v-focus="isfouce5" v-model="passNumFive">
    <input type="password" v-focus="isfouce6" v-blur="isblur6" v-model="passNumSix">

  </div>
</template>

<script>

  export default {
    props:['isfouce', 'thisClose'],
    directives: {
      ifocus: {
        inserted: function (el,binding) {
          if(binding.value) {
            el.focus()
          }
        }
      },
      focus: {
        update: function (el,binding) {
          if(binding.value) {
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
    data() {
      return {
        focusStatus: false,
        passNumOne:'',
        passNumTwo:'',
        passNumThree:'',
        passNumFour:'',
        passNumFive:'',
        passNumSix:'',
        isClose: this.thisClose,
        isfouce1: this.isfouce,
        isfouce2: false,
        isfouce3: false,
        isfouce4: false,
        isfouce5: false,
        isfouce6: false,
        isblur6: false
      }
    },
    mounted() {
      this.focusStatus = true;
    },
    watch: {
      passNumOne(val) {
        if(val.length === 1) {
          this.isfouce2 = true;
        }
      },
      passNumTwo(val) {
        if(val.length === 1) {
          this.isfouce3 = true;
        }
      },
      passNumThree(val) {
        if(val.length === 1) {
          this.isfouce4 = true;
        }
      },
      passNumFour(val) {
        if(val.length === 1) {
          this.isfouce5 = true;
        }
      },
      passNumFive(val) {
        if(val.length === 1) {
          this.isfouce6 = true;
        }
      },
      passNumSix(val) {
        if(val.length === 1) {
          this.isblur6 = true;
          this.overSix();
        }
      },

    },
    methods: {

    }

  }
</script>

<style lang="scss" scoped>
.container {
  padding: 0.5rem;
  text-align: center;
  position: relative;
  input {
    padding:0.35rem;
    width: 1rem;
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
