<template>
  <div>
    <div class="informationListItem">
      <span>现居住城市</span>
      <mu-icon-button class="icon-3" slot="left" @click="openCity"></mu-icon-button>
      <span>{{cityText}}</span>
    </div>

    <mu-bottom-sheet :open="BottomSheet" @close="closeBottomSheet">
      <div class="pickerHeader">
        <mu-flat-button label="取消" class="demo-flat-button pickerLeft" @click="pickerCancel"></mu-flat-button>
        <span>学历</span>
        <mu-flat-button label="确定" class="demo-flat-button pickerRight" @click="citySure"></mu-flat-button>
      </div>
      <mu-picker :slots="educationSlots" :visible-item-count="5" @change="educationChange" :values="education"/>
    </mu-bottom-sheet>

  </div>
</template>

<script>
  export default {
    props: ['cityProp'],
    watch: {
      cityProp(val) {
        this.cityText = val
      },
      cityText(val) {
        this.$emit('on-live-city-change', val);
      }
    },
    data() {
      return {
        cityText: this.cityProp,
        BottomSheet: false
      }
    },
    methods: {
      openCity() {
        this.BottomSheet = true;
      },
      pickerCancel() {
        this.BottomSheet = false;
      },
      citySure() {
        this.BottomSheet = false;
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
  }
</style>
