import Taro, { useEffect, useRouter } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import OverHeader from './components/OverHeader/index'
import InputBar from './components/InputBar/index'
import ProductBar from './components/ProductBar/index'
import * as api from './api.js'

export default function Index ()  {
  const router = useRouter()
  useEffect(() => {
    router.params.login && Taro.login({
      success: async function (res) {
        if (res.code) {
          await api.login(res.code)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }, [])
  return (
    <View>
      <OverHeader />
      <InputBar />
      <ProductBar />
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '游全球',
}
