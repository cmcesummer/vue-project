export default {
  mobile: /^1[34578]\d{9}$/,
  loginCode: /[0-9]{6}/,
  idCard: idcard => {
      if (!idcard) {
        return false;
      }
      idcard = idcard.toString();
      idcard = idcard.toUpperCase();
      let area = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外"
      };

      // 身份有效性检查，年份只允许1或2开头的
      if (!/^\d{6}[12]\d{10}[\dX]$/.test(idcard) ||
        !area[idcard.substr(0, 2)]) {
        return false;
      }

      let year = parseInt(idcard.substr(6, 4), 10);
      let month = parseInt(idcard.substr(10, 2), 10) - 1;
      let day = parseInt(idcard.substr(12, 2), 10);
      let now = new Date();
      let date = new Date();
      date.setFullYear(year);
      date.setMonth(month);
      date.setDate(day);

      // 年月日有效性简单检查
      if (year > now.getFullYear() || year < 1900 ||
        month < 0 || month > 11 ||
        day < 1 || day > 31 ||
        date.getMonth() !== month ||
        date.getDate() !== day) {
        return false;
      }

      // ⑤15-17 顺序码，同一地区同年、同月、同日出生人的编号，奇数是男性，偶数是女性
      // ⑥18 校验码，如果是0-9则用0-9表示，如果是10则用X（罗马数字10）表示

      // 18位的加权因子
    let Wi = [
          7, 9, 10, 5, 8, 4, 2, 1, 6,
        3, 7, 9, 10, 5, 8, 4, 2, 1];
      let sum = 0;
      for (let i = 0; i < 18; ++i) {
        let mul;
        let char = idcard.charAt(i);
        if (char === 'X') {
          mul = 10;
        } else {
          mul = parseInt(char, 10);
        }
        sum += mul * Wi[i];
      }
      //console.log(sum % 11);
      // 身份证校验位检查
      return sum % 11 === 1;
    }
}
