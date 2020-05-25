import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabsPane } from 'taro-ui'
import ProductItem from '../ProductItem/index'
import './index.scss'

export default function ProductTab ({ current, index })  {
  useEffect(() => {
    if (current === index) {
      console.log('请求数据')
    }
  }, [current])
  return (
    <AtTabsPane current={current} index={index} >
      <View className='productList'>
        <ProductItem onClick={() => setOrderVisible(true)} />
      </View>
    </AtTabsPane>
  )
}
