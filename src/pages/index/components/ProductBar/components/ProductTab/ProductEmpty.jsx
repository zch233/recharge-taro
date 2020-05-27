import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default function ProductEmpty ({ emptyTips })  {
  return (
    <View class="product-empty">
      <View className='view-image'><Image className='image' mode='widthFix' lazyLoad src={require('@/static/qrcode.jpg')} /></View>
      <View className='tips'>{emptyTips}</View>
    </View>
  )
}
