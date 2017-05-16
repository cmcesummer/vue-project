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
            <span>直系亲属姓名</span><span></span>
            <mu-text-field hintText="请输入直系亲属姓名"  type="text" class="inInput" style="font-size:12px" v-model="immediateName" :underlineShow="false" ></mu-text-field>
          </div>
          <mu-divider />

          <div class="informationListItem">
            <span>联系电话</span><span></span>
            <mu-text-field hintText="请输入联系电话"  type="text" class="inInput" style="font-size:12px" v-model="immediatePhone" :underlineShow="false" ></mu-text-field>
          </div>
          <mu-divider />

          <div class="informationListItem">
            <span>非亲属姓名</span><span></span>
            <mu-text-field hintText="请输入非亲属姓名"  type="text" class="inInput" style="font-size:12px" v-model="noRelativeName" :underlineShow="false" ></mu-text-field>
          </div>
          <mu-divider />

          <div class="informationListItem">
            <span>联系电话</span><span></span>
            <mu-text-field hintText="请输入联系电话"  type="text" class="inInput" style="font-size:12px" v-model="noRelativePhone" :underlineShow="false" ></mu-text-field>
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

  </div>
</template>

<script>
  import HeaderBar from '@/components/Header'
  import ApplyStep from '@/components/ApplyStep'

  export default{
    data() {
      return {
        activeStep: 3,
        toast: '',
        toastMessage:'',
        immediateName:'',
        immediatePhone:'',
        noRelativeName:'',
        noRelativePhone:'',

      }
    },
    components: {
      HeaderBar,
      ApplyStep
    },
    methods: {

      nextStep() {
        console.log(_fmOpt.token);
        if(this.toast !== '') {
          this.toast.close();
        }

        if(this.immediateName !== '' && this.noRelativeName !== '' &&
          this.commonReg.mobile.test(this.immediatePhone) &&
          this.commonReg.mobile.test(this.noRelativePhone)) {
          console.log('ok')
        } else if(this.immediateName === '' || this.noRelativeName === '') {

          this.toast = this.Toast({
            message: '请输入联系人姓名',
            duration: 1400
          });

        } else if(!this.commonReg.mobile.test(this.immediatePhone) ||
          !this.commonReg.mobile.test(this.noRelativePhone)) {

          this.Indicator.open();
          setTimeout(() => {
            this.Indicator.close();
            this.$router.push({name: 'LimitApproval'})
          }, 1000);

        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
