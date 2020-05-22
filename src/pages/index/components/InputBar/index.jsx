import Taro, { useState } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'
import { AtInput } from 'taro-ui'

export default function OverHeader ()  {
  const [rechargePhone, setRechargePhone] = useState('')
  const phoneInput = value => {
    setRechargePhone(value)
  }

  return (
    <View className="InputBar">
      <View className="InputBar-top">
        <View className='view-image'><Image mode='widthFix' src='https://oss.globalcharge.cn/prod/wechat/countryFlags/China.svg' /></View>
        <View className='phoneInputBar'>
          <View className='areaNumber'>+86</View>
          <View className='phoneInput'>
            <AtInput
              className='myPhoneInput'
              name='value'
              type='text'
              border={false}
              placeholder='请输入手机号'
              value={rechargePhone}
              onChange={phoneInput}
            />
          </View>
        </View>
      </View>
      <View className='InputBar-bottom'>
        <View className='countryName'>中国</View>
        <View className='carrierName'>中国移动</View>
      </View>
    </View>
  )
}
