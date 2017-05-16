import axios from 'axios';
import {AES, MD5, enc} from 'crypto-js'
import CryptoJS from 'crypto-js'

//axios.defaults.baseURL = 'https:/*api.example.com';


export default {
  aseKey: '1111111111111111',
  aseIv: '2222222222222222',
  md5Key: '1111111111111111',
  aes(val) {
    let key = CryptoJS.enc.Utf8.parse(this.aseKey);
    let iv = CryptoJS.enc.Utf8.parse(this.aseIv);
    let srcs = CryptoJS.enc.Utf8.parse(JSON.stringify(val));
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString();
  },
  md5(val) {
    return MD5(val, this.md5Key).toString();
  },
  extend(destination, source) {
    for ( let property in source) {
      if(source.hasOwnProperty(property)) {
        destination[property] = source[property];
      }
    }
    return destination;
  },
  get(url) {
    return axios.get(url, {
      timeout: 10000
    })
  },
  postJson(url, data) {
    if(Object.prototype.toString.call(data) !== '[object Object]') {
      return
    }

    let token = localStorage.getItem('token') || '';

    let objData = this.extend({
          platform: 3, //平台 ： 微信：3
          channel: '', //渠道
          version: '', //版本
          uuid: '', //设备唯一编码
          ts: new Date().getTime(), //该次请求的时间戳
          token: token //登陆后的身份验证信息
        }, data),

        message = this.aes(objData),

        signature = this.md5(message),

        dataSend = {
          message: message,
          signature: signature
        };

    console.log(objData);
    return axios.post(url, JSON.stringify(dataSend), {
      headers: {'Content-Type': 'application/json'},
      timeout:60000
    })

  }

}

