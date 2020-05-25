import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtFloatLayout, AtIcon } from "taro-ui"

export default function CouponList ({ couponListVisible, onClose })  {
  return (
    <AtFloatLayout className='myCouponList' isOpened={couponListVisible} title="优惠券" onClose={onClose}>
      <View className='couponList'>
        {
          '123456789'.split('').map(v => (
            <View key={v} className='couponList-item'>
              <View class="popup-coupon HF">
                <View class="popup-coupon-price"><Text className='discount'>2</Text>元</View>
                {/* <View class="popup-coupon-price"><Text className='discount>3</Text>折</View> */}
                <View class="popup-coupon-info">
                  <Text className='name'>流量满减券</Text>
                  <View className='time'>有效期至2019.10.12</View>
                </View>
              </View>
              <View className='popup-radio'>
                <AtIcon value='check' size='18' color='#fff'></AtIcon>
              </View>
            </View>
          ))
        }
      </View>
      <View class="notUseCoupon" onClick={onClose}>不使用优惠券</View>
    </AtFloatLayout>
  )
}
