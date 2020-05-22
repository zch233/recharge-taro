import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtFloatLayout } from "taro-ui"

export default function Order ({ orderVisible, onClose })  {
  return (
    <AtFloatLayout className='myOrder' isOpened={orderVisible} title="确认付款" onClose={onClose}>
      12313223
    </AtFloatLayout>
  )
}
