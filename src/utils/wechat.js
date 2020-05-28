import Taro from '@tarojs/taro'
import * as api from './api.js'

export function login () {
  Taro.login({
    success: async function (res) {
      if (res.code) {
        const { result: isSubscribe } = await api.login(res.code)
        Taro.setStorageSync('isSubscribe', isSubscribe)
        Taro.reLaunch({ url: '/pages/index/index' })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  })
}

export function wechatPay ({ nonceStr, paySign, signType, payPackage, timeStamp }, orderCode) {
  return new Promise((resolve, reject) => {
    Taro.requestPayment({
      timeStamp,
      nonceStr,
      package: payPackage,
      signType,
      paySign,
      success () {
        if (!Taro.setStorageSync('isSubscribe')) {
          const tmplIds = '8Q9-cY0jD1FTK59AqcDcGSKj5ZBC5uw1zdDcglsqyRA'
          Taro.requestSubscribeMessage({
            tmplIds: [tmplIds],
            async success (res) {
              if (res[tmplIds] === 'accept') {
                await api.subscribe(orderCode)
                resolve(res)
              } else {
                resolve('拒绝授权')
              }
              Taro[Taro.getCurrentPages()[Taro.getCurrentPages().length - 1].route === 'pages/record/record' ? 'redirectTo' : 'navigateTo']({ url: '/pages/record/record' })
            },
            fail (err) {
              reject(err)
              Taro.navigateTo({ url: '/pages/record/record' })
            }
          })
        } else {
          Taro.navigateTo({ url: '/pages/record/record' })
        }
      },
      fail (err) {
        console.log('fail')
        reject(err)
      },
    })
  })
}
