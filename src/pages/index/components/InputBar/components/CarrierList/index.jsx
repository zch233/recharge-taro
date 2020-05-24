import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import { AtFloatLayout, AtIcon } from "taro-ui"

export default function CountryList ({ listVisible, onClose })  {

  return (
    <AtFloatLayout className='myCarrierList' isOpened={listVisible} title='请选择运营商' onClose={onClose}>
      <View className='carrierList'>
        {
          '123456789'.split('').map(v => (
            <View key={v} className='carrierList-item'>
              <View className='view-image'><Image className='image' mode='widthFix' src='https://globalcharge.oss-cn-hongkong.aliyuncs.com/prod/rechargeBack/product/carrier/CN/Telecom1586244795945.jpeg' /></View>
              <View className='name'>Tass</View>
              <View className='check'><AtIcon value='check' size='18' color='#fff'></AtIcon></View>
            </View>
          ))
        }
      </View>
    </AtFloatLayout>
  )
}
