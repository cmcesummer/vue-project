export default {
  loanRecordType(value) {
    if(value == 1) {
      return '还款中'
    } else if(value == '0') {
      return '审批中'
    } else if(value == '2') {
      return '审批拒绝'
    } else if(value == '3') {
      return '已还清'
    }
  }
}
