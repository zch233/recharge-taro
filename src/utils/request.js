import Taro from '@tarojs/taro'
import * as wechat from './wechat'
import { setGlobalData, getGlobalData } from './globalData'

const baseURL = REQUEST_URL
const error = {
  'JU402': { message: '当前用户不在线', href: '' },
  'JU403': { message: '对不起，您无权限访问该页面！', href: '403' },
  'JU404': { message: '找不到该页面啦！', href: '404' },
  'WX0005': { message: '请先关注公众号在访问哦！', href: 'leadFollow' },
  'JU302': { message: '对不起，服务器正在维护！', href: 'serveDead' },
  'JU430': { message: '网络异常，请稍候再试！', href: 'networkError' },
}
export default function (url, data, method='POST') {
  return new Promise(resolve => {
    Taro.showLoading({ title: '加载中', mask: true })
    const request = Taro.request({
      url: baseURL + url,
      data: {
        timestamp: Date.now(),
        value: data,
      },
      method,
      timeout: 60000,
      header: {
        'token': Taro.getStorageSync('token')
      },
      success: function (res) {
        const result = res.data
        if (result.code !== '00') {
          if (error[result.code]) {
            if (result.code === 'JU402') {
              getGlobalData('requestList') && getGlobalData('requestList').map(v => v.abort()) // 可能会有取消不掉的情况
              wechat.login()
            } else {
              Taro.showToast({ title: error[result.code].message, icon: 'none', duration: 2000, mask: true }).then(() => {
                Taro.reLaunch({ url: `/pages/frame/frame?href=${error[result.code].href}` })
              })
            }
            return
          }
          if (result.message) {
            Taro.showToast({ title: result.message, icon: 'none', duration: 2000, mask: true })
          } else {
            Taro.showToast({ title: '网络异常', icon: 'none', duration: 2000, mask: true })
          }
          throw Error(result.message)
        } else {
          Taro.setStorageSync('token', res.header.token)
          resolve(result)
        }
      },
      fail: function (err) {
        console.log(err, '请求失败')
        Taro.showToast({ title: err.errMsg, icon: 'none', duration: 2000, mask: true })
        throw Error(err.errMsg)
      },
      complete: function () {
        Taro.hideLoading()
      }
    });
    const requestList = getGlobalData('requestList') || []
    setGlobalData('requestList', [... requestList, request])
  })
}
