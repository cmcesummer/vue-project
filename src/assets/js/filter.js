function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

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
  },
  dateFilter(date, fmt) {
    if(date === '') {
      return
    }
    date = new Date(date);
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    return fmt;

  }


}
