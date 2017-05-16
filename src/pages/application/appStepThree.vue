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
            <span>所在行业</span>
            <mu-icon-button class="icon-3" slot="left" @click="openIndustry"></mu-icon-button>
            <span>{{industryText}}</span>
          </div>
          <mu-divider />

          <div class="informationListItem">
            <span>单位名称</span><span></span>
            <mu-text-field hintText="请输入单位名称"  type="text" class="inInput" style="font-size:12px" v-model="companyName" :underlineShow="false" ></mu-text-field>
          </div>
          <mu-divider />

          <div class="informationListItem">
            <span>单位性质</span>
            <mu-icon-button class="icon-3" slot="left" @click="openMarriage"></mu-icon-button>
            <span>{{marriageText}}</span>
          </div>
          <mu-divider />

          <work-time :workTimeProp="workTimeProp" @on-work-time-change="onWorkTimeChange"></work-time>
          <mu-divider />


          <div class="informationListItem">
            <span>所在部门</span><span></span>
            <mu-text-field hintText="请输入所在部门"  type="text" class="inInput" style="font-size:12px" v-model="companyName" :underlineShow="false" ></mu-text-field>
          </div>
          <mu-divider />

          <div class="informationListItem">
            <span>所属职位</span>
            <mu-icon-button class="icon-3" slot="left" @click="openCity"></mu-icon-button>
            <span>{{cityText}}</span>
          </div>
          <mu-divider />

          <div class="informationListItem">
            <span>月工资收入(元)</span><span></span>
            <mu-text-field hintText="请填写每月工资收入" type="number" class="inInput" style="font-size:12px" v-model="companyName" :underlineShow="false" ></mu-text-field>
          </div>
          <mu-divider />

          <div class="informationListItem">
            <span>公司电话</span><span></span>
            <input type="number" class="telThree tel" maxlength="4" placeholder="分机号">
            <input type="number" class="telTwo tel" maxlength="4" placeholder="座机号">
            <input type="number" class="telOne tel" maxlength="4" placeholder="区号">
            <!--<mu-text-field hintText="请填写每月工资收入" type="number" class="inInput" style="font-size:12px" v-model="companyName" :underlineShow="false" ></mu-text-field>-->
          </div>
          <mu-divider />

          <div class="informationListItems">
            <span>公司地址</span><span style="color:#cccccc;float:right;margin-right:15px;">具体到门牌号码</span>
            <br>
            <mu-text-field hintText="请输入详细住宅地址如xx区xx路xx号xx栋xx室"  type="text" style="font-size:12px" v-model="address" :underlineShow="false" ></mu-text-field>
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
  import ApplyStep from '@/components/ApplyStep'
  //入职时间
  import WorkTime from '@/pages/application/components/workTime'

  export default{
    data() {
      return {
        activeStep: 2,
        eduBottomSheet: false,

        educationSlots: [
          {
            width: '100%',
            textAlign: 'center',
            values: ['高新技术、金融、法律、医药','环保、物流、教育、邮电通信','饮食、传媒、生产制造','批发、零售、传统工业或其他']
          }
        ],
        education: ['高中以下学历'],
        industryText: '',
        address: '',
        typeText:'',
        cityText:'',
        registerText:'',
        marriageText:'',
        //入职时间
        workTimeProp: '1485964800000',
        //

      }
    },
    components: {
      ApplyStep,
      WorkTime
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
      openIndustry() {
        this.eduBottomSheet = true
      },
      educationSure() {
        this.eduBottomSheet = false;
        this.industryText = this.education[0];
      },
      nextStep() {
        //this.$router.push({name:'ApplyContact'})
        console.log(new Date(this.workTimeProp))
      },

      /*----------入职时间--------------*/
      onWorkTimeChange(val) {
        this.workTimeProp = val
      }

    }
  }
</script>

<style lang="scss" scoped>

</style>
