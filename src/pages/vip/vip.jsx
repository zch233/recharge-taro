import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, WebView  } from '@tarojs/components'
import JWT from 'jsonwebtoken'
import SHA1 from 'sha1'
import { getUserInfo } from './api'

export default function Vip ()  {
  const [userKey, setUserKey] = useState('')
  const getUserKey = async () => {
    const { result } = await getUserInfo()
    result.member ? setUserKey(Taro.getStorageSync('token') && SHA1(JWT.decode(Taro.getStorageSync('token')).openId)) : setUserKey('vip')
  }
  useEffect(() => {
    getUserKey()
  }, [])

  return (
    <View>
      <WebView src={`${WEBVIEW_URL}/user/share-poster-mini?userkey=${userKey}`} />
    </View>
  )
}
Vip.config = {
  navigationBarTitleText: '专属二维码',
}
