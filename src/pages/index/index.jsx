import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default function Index ()  {
  return (
    <View>
      <Text>Hello world!</Text>
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '专属二维码',
}
