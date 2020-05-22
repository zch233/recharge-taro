import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default function ProductItem ({ onClick })  {
  return (
    <View className="ProductItem" onClick={onClick}>
      <View className='name'>10K IDR<Text className='days'>（10天）</Text></View>
      <View className='price'>售价10.00元</View>
    </View>
  )
}
