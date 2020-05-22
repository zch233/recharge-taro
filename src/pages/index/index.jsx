import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import OverHeader from './components/OverHeader/index'
import InputBar from './components/InputBar/index'

export default function Index ()  {
  return (
    <View>
      <OverHeader />
      <InputBar />
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '游全球',
}
