<template>
    <div class="login">
        <header-bar title='柚有钱' class="login-header">
          <mu-icon-button class="icon-3" slot="left"></mu-icon-button>
          <mu-icon-button  slot="right"></mu-icon-button>
        </header-bar>
        <div class="logo">
          logo
        </div>
        <div class="loginInput">
            <div class="first">
                <i class='icon-4'></i>
                <mu-text-field hintText=" 请输入手机号码"  type="number" class="moble " v-model="mobile" @change="handlechange" :underlineShow="false" ></mu-text-field>
            </div>
            <div class="first">
                <i class='icon-6'></i>
                <mu-text-field hintText=" 请输入验证码" type="number" v-model="loginCode" class="moble demo-divider-form" :underlineShow="false" >
                </mu-text-field>
              <mu-flat-button  :label="getCodeLabel" class="demo-flat-button button orange-color"  :disabled="getCodeDisabled" @click="getCode"></mu-flat-button>
            </div>
            <div class="first">
              <mu-raised-button label="提交" class="demo-raised-button fullBtn" fullWidth @click="updateBtn"></mu-raised-button>
            </div>
        </div>
      <mu-toast v-if="toast" class="msgToast" :message='toastMessage' @close="hideToast"></mu-toast>
    </div>
</template>

<script>
import HeaderBar from '@/components/Header'


export default {
    data() {
        return {
          mobile:'',
          inputLine:false,
          toast: false,
          toastMessage:'',
          getCodeDisabled: false,
          getCodeLabel: '获取验证码',
          loginCode: ''
        }
    },
    components: {
        HeaderBar
    },
    mounted(){

    },
    methods: {
        inputFocus() {
            this.inputLine = true;
        },
        inputBlur() {
            this.inputLine = false;
        },
        handlechange() {
            console.log(this.mobile)
        },
        thisIntervals() {
          this.getCodeDisabled = true;
          this.getCodeLabel = 60 + ' s';
          let num = 59;
          let clean = setInterval(() => {
            this.getCodeLabel = num + ' s';
            if(num === 0) {
              clearInterval(clean);
              this.getCodeLabel = '获取验证码';
              this.getCodeDisabled = false;
            }
            num--;
          }, 1000);
        },
        getCode() {
            if(this.mobile !== "" && this.commonReg.mobile.test(this.mobile)) {
              this.$api.postJson('asd', {mobile:this.mobile}).then(res => {
                this.thisIntervals();
              }).catch(err => {
                  console.log(err)
              });

            } else{
                this.toastMessage = '请输入正确手机号';
                this.showToast()
            }
        },
        showToast() {
            this.toast = true;
            if (this.toastTimer) clearTimeout(this.toastTimer);
            this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
        },
        hideToast() {
            this.toast = false;
            if (this.toastTimer) clearTimeout(this.toastTimer)
        },
        updateBtn() {
          this.$router.push({name:'Apply'});
          if(this.commonReg.loginCode.test(this.loginCode) && this.commonReg.mobile.test(this.mobile)) {
            console.log(this.loginCode, this.mobile);

            /*this.$api.postJson('asd',{mobile:this.mobile,code:this.loginCode}).then(res => {
                if(res.data.code !== 200) {
                    return 1
                } else if(res.data) {

                }

            }).catch(err => {
                console.log(err)
            })*/



          } else if(!this.commonReg.mobile.test(this.mobile)) {
            this.toastMessage = '请输入正确手机号';
            this.showToast()
          } else if(!this.commonReg.loginCode.test(this.loginCode)) {
            this.toastMessage = '请输入正确验证码';
            this.showToast()
          }
        }
    }
}
</script>

<style scoped lang='scss'>
@import './../../assets/main.scss';

.fullBtn {
  color: #ffffff;
  background: linear-gradient(to right, #fa9a1a, #fa7718);
  border-radius: 20px;
  margin-top:20px;
  font-size:16px;
}

.loginInput .first{
    position:relative;
    padding:0 25px;
    .button{
        position:absolute;
        top:3px ;
        right:10px;
    }
     .icon-4, .icon-6{
        position:absolute;
        left:23px;
        top:11px;
        font-size:18px;
    }
}

.moble{
  padding-left:20px;
  width:100%;
  border-bottom:1px solid #e4e5e5;
}
.login{
  background: #fff;
  height:100%;
}

.logo{
    height:5rem;
}

.login-header {
    color: #000000;
}
</style>
