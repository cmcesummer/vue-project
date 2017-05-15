import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Mint from '@/pages/munt'
import Login from '@/pages/login/login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/mint',
      name: 'Mint',
      component: Mint
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: '注册'
      },
      component: Login
    },
    // 额度申请 - 第一步
    {
      path: '/application',
      name: 'Apply',
      meta: {
        title: '额度申请'
      },
      component: resolve => {
        require(['@/pages/application'], resolve)
      }
    },
    // 额度申请 - 第二步
    {
      path: '/application/two',
      name: 'ApplyInformation',
      meta: {
        title: '额度申请'
      },
      component: resolve => {
        require(['@/pages/application/appStepTwo'], resolve)
      }
    },
    // 额度申请 - 第三步
    {
      path: '/application/three',
      name: 'ApplyWork',
      meta: {
        title: '额度申请'
      },
      component: resolve => {
        require(['@/pages/application/appStepThree'], resolve)
      }
    },
    // 额度申请 - 第四步
    {
      path: '/application/four',
      name: 'ApplyContact',
      meta: {
        title: '额度申请'
      },
      component: resolve => {
        require(['@/pages/application/appStepFour'], resolve)
      }
    },
    //首页 - 额度申请审批中
    {
      path: '/homePage/limitApproval',
      name: 'LimitApproval',
      meta: {
        title: '柚子生活'
      },
      component: resolve => {
        require(['@/pages/homePage/limitApproval'], resolve)
      }
    },
    //首页 - 可以借款
    {
      path: '/homePage/resolveLoan',
      name: 'ResolveLoan',
      meta: {
        title: '柚子生活'
      },
      component: resolve => {
        require(['@/pages/homePage/resolveLoan'], resolve)
      }
    },
    //首页 - 借款出现问题 （包括 type: 1.额度申请拒绝、2.电核、3.借款拒绝）
    {
      path: '/homePage/rejectLoan/:type',
      name: 'RejectLoan',
      meta: {
        title: '柚子生活'
      },
      component: resolve => {
        require(['@/pages/homePage/rejectLoan'], resolve)
      }
    },
    // 借款
    {
      path: '/loanMoney',
      name: 'LoanMoney',
      meta: {
        title: '借款'
      },
      component: resolve => {
        require(['@/pages/loanMoney'], resolve)
      }
    },
    //借款 - 借款记录
    {
      path: '/loanRecord/index',
      name: 'LoanRecord',
      meta: {
        title: '借款记录'
      },
      component: resolve => {
        require(['@/pages/loanRecord'], resolve)
      }
    },
    //借款 - 借款详情
    {
      path: '/loanRecord/loanDetail',
      name: 'LoanDetail',
      meta: {
        title: '借款详情'
      },
      component: resolve => {
        require(['@/pages/loanRecord/loanDetail'], resolve)
      }
    },
    //还钱 - 当期应还
    {
      path: '/payBack/currentPayBack',
      name: 'CurrentPayBack',
      meta: {
        title: '当期应还'
      },
      component: resolve => {
        require(['@/pages/payBack/currentPayBack'], resolve)
      }
    },
    //还钱 - 全部应还
    {
      path: '/payBack/allPayBack',
      name: 'AllPayBack',
      meta: {
        title: '全部应还'
      },
      component: resolve => {
        require(['@/pages/payBack/allPayBack'], resolve)
      }
    },
    //还钱 - 提前还款
    {
      path: '/payBack/advancePayBack',
      name: 'AdvancePayBack',
      meta: {
        title: '提前还款'
      },
      component: resolve => {
        require(['@/pages/payBack/advancePayBack'], resolve)
      }
    },



    // 其他设置 - 绑定银行卡
    {
      path: '/set/bindBackCard',
      name: 'BindBackCard',
      meta: {
        title: '绑定银行卡'
      },
      component: resolve => {
        require(['@/pages/setCommon/bindBankCard'], resolve)
      }
    },
    //设置交易密码
    {
      path: '/set/setPayPassword',
      name: 'SetPayPassword',
      meta: {
        title: '设置交易密码'
      },
      component: resolve => {
        require(['@/pages/setCommon/setPayPassword'], resolve)
      }
    },
    //修改交易密码
    {
      path: '/set/changePayPassword',
      name: 'ChangePayPassword',
      meta: {
        title: '修改交易密码'
      },
      component: resolve => {
        require(['@/pages/setCommon/changePayPassword'], resolve)
      }
    }

  ]
})
