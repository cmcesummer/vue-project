import axios from 'axios';

//axios.defaults.baseURL = 'https:/*api.example.com';

export default {
  get: url => {
    return axios.get(url, {
      timeout: 10000
    })
  },
  postJson: (url, data) => {
    if(Object.prototype.toString.call(data) !== '[object Object]') {
      return
    }
    return axios.post(url, JSON.stringify(data), {
      headers: {'Content-Type': 'application/json'},
      timeout:60000
    })
  }
}
