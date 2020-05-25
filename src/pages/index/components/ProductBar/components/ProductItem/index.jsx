import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default function ProductItem ({ onClick, productInfo = {}, index })  {
  return (
    <View className="ProductItem" onClick={() => onClick(productInfo)} data-hotTips={productInfo.hotTips}>
      <View className='name'>{productInfo.name}{index === 1 && productInfo.tips && <Text className='days'>（{productInfo.tips}）</Text>}</View>
      {productInfo.price && <View className='price'>售价{productInfo.price.toFixed(2)}元</View>}
    </View>
  )
}
