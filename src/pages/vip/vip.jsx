import Taro, { useEffect } from '@tarojs/taro'
import { View, WebView  } from '@tarojs/components'
import JWT from 'jsonwebtoken'
import SHA1 from 'sha1'

export default function Vip ()  {
  useEffect(() => {
    Taro.showLoading({ title: '正在生成中', mask: true, duration: 2000 })
  }, [])

  return (
    <View>
      <WebView src={`${WEBVIEW_URL}/user/share-poster-mini?userkey=${(Taro.getStorageSync('token') && SHA1(JWT.decode(Taro.getStorageSync('token')).openId))}`} />
    </View>
  )
}
Vip.config = {
  navigationBarTitleText: '专属二维码',
}
