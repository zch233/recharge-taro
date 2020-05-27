import Taro from '@tarojs/taro'
import * as api from './api.js'

export function login () {
  Taro.login({
    success: async function (res) {
      if (res.code) {
        await api.login(res.code)
        Taro.reLaunch({ url: '/pages/index/index' })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  })
}
