<template>
  <div class="application">


    <div class="stepContainer">
      <apply-step :step="activeStep"></apply-step>
    </div>

    <div class="gray"></div>

    <div class="informationForm">
      <mu-paper>
        <mu-menu>
          <div class="informationListItem">
            <span>学历</span>
            <mu-icon-button class="icon-3" slot="left" @click="openEducation"></mu-icon-button>
            <span>{{educationText}}</span>
          </div>
          <mu-divider />

          <div class="informationListItem">
            <span>婚姻状况</span>
            <mu-icon-button class="icon-3" slot="left" @click="openMarriage"></mu-icon-button>
            <span>{{marriageText}}</span>
          </div>
          <mu-divider />

          <div class="informationListItem">
            <span>户籍性质</span>
            <mu-icon-button class="icon-3" slot="left" @click="openRegister"></mu-icon-button>
            <span>{{registerText}}</span>
          </div>
          <mu-divider />

          <live-city :cityProp="cityProp" @on-live-city-change="onLiveCityChange"></live-city>
          <mu-divider />

          <div class="informationListItems">
            <span>现住宅地址</span><span></span>
            <br>
            <mu-text-field hintText="请输入详细住宅地址如xx区xx路xx号xx栋xx室"  type="text" style="font-size:12px" v-model="address" :underlineShow="false" ></mu-text-field>
          </div>
          <mu-divider />

          <div class="informationListItem">
            <span>现居住地类型</span>
            <mu-icon-button class="icon-3" slot="left" @click="openType"></mu-icon-button>
            <span>{{typeText}}</span>
          </div>

        </mu-menu>
      </mu-paper>
    </div>

    <div class="nextStep">
      <mu-raised-button label="下一步" class="demo-raised-button fullBtn" fullWidth @click="nextStep"></mu-raised-button>
    </div>

    <div class="agreement">
      <span>同意 《柚子信用贷贷款服务协议》</span>
    </div>

    <mu-bottom-sheet :open="eduBottomSheet" @close="closeBottomSheet">
      <div class="pickerHeader">
        <mu-flat-button label="取消" class="demo-flat-button pickerLeft" @click="pickerCancel"></mu-flat-button>
        <span>学历</span>
        <mu-flat-button label="确定" class="demo-flat-button pickerRight" @click="educationSure"></mu-flat-button>
      </div>
      <mu-picker :slots="educationSlots" :visible-item-count="5" @change="educationChange" :values="education"/>
    </mu-bottom-sheet>

  </div>
</template>

<script>
import HeaderBar from '@/components/Header'
import ApplyStep from '@/components/ApplyStep'
import LiveCity from '@/pages/application/components/liveCity'
export default{
  data() {
    return {
      activeStep: 1,
      eduBottomSheet: false,
      educationSlots: [
        {
          width: '100%',
          textAlign: 'center',
          values: ['高中以下学历','大学专科','本科','硕士研究生及以上学历']
        }
      ],
      education: ['高中以下学历'],
      educationText: '',
      address: '',
      typeText:'',
      cityText:'',
      registerText:'',
      marriageText:'',
      //居住城市
      cityProp: ''
    }
  },
  components: {
    HeaderBar,
    ApplyStep,
    LiveCity
  },
  methods: {
    pickerCancel() {
      this.eduBottomSheet = false
    },
    closeBottomSheet () {
      this.eduBottomSheet = false
    },
    educationChange(value, index) {
      this.education = [value];
      console.log(this.education)
    },
    openEducation() {
      this.eduBottomSheet = true
    },
    educationSure() {
      this.eduBottomSheet = false;
      this.educationText = this.education[0];
    },
    nextStep() {
      this.$router.push({name:'ApplyWork'})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
