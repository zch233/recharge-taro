import Taro, { useState, useMemo } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtFloatLayout, AtIcon } from "taro-ui"
import CouponList from '../CouponList/index'

export default function Order ({ orderVisible, onClose, orderData = {} })  {
  const [couponListVisible, setCouponListVisible] = useState(false)
  const [discountRadio, setDiscountRadio] = useState(orderData.selection)
  const displayOrderData = useMemo(() => {
    const { cname, carrier, name, point, price, couponList, uuid } = orderData
    return {
      name: `${cname} ${carrier} 运营商 ${name}`,
      point: point >= price * 100 ? (price * 100 - 1) : point,
      coupon: couponList && (couponList.filter(v => v.uuid === uuid)[0] || (couponList.length === 0 ? {} : { name: `${couponList.length}张可用` }))
    }
  }, [orderData])
  return (
    <View>
      <AtFloatLayout className='myOrder' isOpened={orderVisible} title="确认付款" onClose={onClose}>
        <View className='orderDetail'>
          <View className='orderDetail-item'>
            <View className='orderDetail-item-label'>订单详情</View>
            <View className='orderDetail-item-value'>{displayOrderData.name}</View>
          </View>
          <View className='orderDetail-item'>
            <View className='orderDetail-item-label'>手机号码</View>
            <View className='orderDetail-item-value'>{orderData.account}</View>
          </View>
          <View className='orderDetail-item'>
            <View className='orderDetail-item-label'>商品价格</View>
            <View className='orderDetail-item-value'>{orderData.price && orderData.price.toFixed(2)}元</View>
          </View>
          <View className={`orderDetail-item radio ${discountRadio === 'point' && 'selected'}`}>
            <View className='orderDetail-item-label'>积分<Text className='pointDiscount'>可用<Text className='count'>{displayOrderData.point}积分</Text>抵扣<Text className='price'>￥{displayOrderData.point && (displayOrderData.point / 100).toFixed(2)}元</Text></Text></View>
            <View className='orderDetail-item-radio'><AtIcon value='check' size='18' color='#fff'></AtIcon></View>
          </View>
          <View className={`orderDetail-item radio ${discountRadio === 'coupon' && 'selected'}`} onClick={() => setCouponListVisible(true)}>
            <View className='orderDetail-item-label'>优惠券{ displayOrderData.coupon && displayOrderData.coupon.name && <Text className='couponDiscount'>{displayOrderData.coupon && displayOrderData.coupon.name}</Text> }</View>
            <View className='orderDetail-item-radio'><AtIcon value='check' size='18' color='#fff'></AtIcon></View>
          </View>
          <View className={`orderDetail-item radio  ${!discountRadio && 'selected'}`}>
            <View className='orderDetail-item-label'>不使用优惠</View>
            <View className='orderDetail-item-radio'><AtIcon value='check' size='18' color='#fff'></AtIcon></View>
          </View>
        </View>
        <View class="orderDiscountTips">*积分优惠券二选一</View>
        <View class="orderButton">
          <View className='totalPrice'>应付金额<Text className='mark'>￥</Text><Text className='price'>152</Text></View>
          <Text className='discountPrice'>已优惠￥125</Text>
          <Text className='buyButton'>立即付款</Text>
        </View>
      </AtFloatLayout>
      <CouponList
        couponListVisible={couponListVisible}
        onClose={() => setCouponListVisible(false)}
      />
    </View>
  )
}
