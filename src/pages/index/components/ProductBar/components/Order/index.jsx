import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtFloatLayout, AtIcon } from "taro-ui"

export default function Order ({ orderVisible, onClose })  {
  return (
    <AtFloatLayout className='myOrder' isOpened={orderVisible} title="确认付款" onClose={onClose}>
      <View className='orderDetail'>
        <View className='orderDetail-item'>
          <View className='orderDetail-item-label'>订单详情</View>
          <View className='orderDetail-item-value'>印尼 xxxx 运营商 100K</View>
        </View>
        <View className='orderDetail-item'>
          <View className='orderDetail-item-label'>手机号码</View>
          <View className='orderDetail-item-value'>15915165156</View>
        </View>
        <View className='orderDetail-item'>
          <View className='orderDetail-item-label'>商品价格</View>
          <View className='orderDetail-item-value'>106 CNY</View>
        </View>
        <View className='orderDetail-item radio'>
          <View className='orderDetail-item-label'>积分<Text className='pointDiscount'>可用<Text className='count'>152积分</Text>抵扣<Text className='price'>￥120元</Text></Text></View>
          <View className='orderDetail-item-radio'><AtIcon value='check' size='18' color='#fff'></AtIcon></View>
        </View>
        <View className='orderDetail-item radio selected'>
          <View className='orderDetail-item-label'>优惠券<Text className='couponDiscount'>满10-5</Text></View>
          <View className='orderDetail-item-radio selected'><AtIcon value='check' size='18' color='#fff'></AtIcon></View>
        </View>
      </View>
      <View class="orderDiscountTips">*积分优惠券二选一</View>
      <View class="orderButton">
        <View className='totalPrice'>应付金额<Text className='mark'>￥</Text><Text className='price'>152</Text></View>
        <Text className='discountPrice'>已优惠￥125</Text>
        <Text className='buyButton'>立即付款</Text>
      </View>
    </AtFloatLayout>
  )
}
