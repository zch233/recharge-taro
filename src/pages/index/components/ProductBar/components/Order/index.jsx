import Taro, { useState, useMemo, useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtFloatLayout, AtIcon } from "taro-ui"
import CouponList from '../CouponList/index'
import * as api from './api'
import { wechatPay } from '@/utils/wechat'

export default function Order ({ orderVisible, onClose, orderData = {} })  {
  const [couponListVisible, setCouponListVisible] = useState(false)
  const [discountRadio, setDiscountRadio] = useState(null)
  const discountVisible = useMemo(() => orderData.countryCode !== 'CN', [orderData])
  const displayOrderData = useMemo(() => {
    const { cname, carrier, name, point, price, couponList, uuid, selection } = orderData
    return {
      selection,
      name: `${cname} ${carrier} 运营商 ${name}`,
      point: discountVisible ? (point >= price * 100 ? (price * 100 - 1) : point) : 0,
      coupon: discountVisible ? (couponList && (couponList.filter(v => v.uuid === uuid)[0] || (couponList.length === 0 ? {} : { name: `${couponList.length}张可用` }))) : {}
    }
  }, [orderData])
  const choosePointRadio = () => {
    if (displayOrderData.point === 0) {
      Taro.showToast({ title: '暂无积分可用', icon: 'none', duration: 2000, mask: true })
      return
    }
    setDiscountRadio('point')
  }
  const chooseCouponRadio = () => {
    if (orderData.couponList && orderData.couponList.length === 0) {
      Taro.showToast({ title: '暂无优惠券可用', icon: 'none', duration: 2000, mask: true })
      return
    }
    setDiscountRadio('coupon')
    setCouponListVisible(true)
  }
  useEffect(() => {
    setDiscountRadio(orderData.selection)
  }, [orderData])
  const discountPrice = useMemo(() => {
    if (discountRadio === 'point' && displayOrderData.point) {
      return (displayOrderData.point / 100).toFixed(2) * 1
    } else if (discountRadio === 'coupon' && displayOrderData.coupon.value) {
      return displayOrderData.coupon.value.toFixed(2) * 1
    } else {
      return 0
    }
  }, [discountRadio])
  const payAmount = useMemo(() => {
    const payAmount = (orderData.price - discountPrice).toFixed(2) * 1
    if (Number.isNaN(payAmount)) return orderData.price // 防御
    return payAmount > 0 ? payAmount : 0.01
  }, [discountRadio])
  const payNow = async () => {
    if (payAmount <= 0) { // 防御
      Taro.showModal({ title: '提示', content: '系统异常，请联系管理官+v：yqq-NO2' })
      return true
    }
    const { result } = await api.orderPay({ ...orderData, pageUrl: encodeURIComponent('https://wechat.globalcharge.cn/home'), payment: 'wc_pay', tradeType: 'JSAPI', originalPayAmount: orderData.price, payAmount, uuid: displayOrderData.coupon.uuid, point: displayOrderData.point, selection: discountVisible ? discountRadio : null, appid: APP_ID, })
    wechatPay(result.payInfo || {})
  }
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
          {
            discountVisible && (
              <View>
                <View className={`orderDetail-item radio ${discountRadio === 'point' && 'selected'} ${displayOrderData.point === 0 && 'disabled'}`} onClick={choosePointRadio}>
                  <View className='orderDetail-item-label'>积分<Text className='pointDiscount'>可用<Text className='count'>{displayOrderData.point}积分</Text>抵扣<Text className='price'>￥{displayOrderData.point && (displayOrderData.point / 100).toFixed(2)}元</Text></Text></View>
                  <View className='orderDetail-item-radio'><AtIcon value='check' size='18' color='#fff'></AtIcon></View>
                </View>
                <View className={`orderDetail-item radio ${discountRadio === 'coupon' && 'selected'} ${orderData.couponList && orderData.couponList.length === 0 && 'disabled'}`} onClick={chooseCouponRadio}>
                  <View className='orderDetail-item-label'>优惠券{ displayOrderData.coupon && displayOrderData.coupon.name && <Text className='couponDiscount'>{displayOrderData.coupon && displayOrderData.coupon.name}</Text> }</View>
                  <View className='orderDetail-item-radio'><AtIcon value='check' size='18' color='#fff'></AtIcon></View>
                </View>
                <View className={`orderDetail-item radio  ${!discountRadio && 'selected'}`} onClick={() => setDiscountRadio(null)}>
                  <View className='orderDetail-item-label'>不使用优惠</View>
                  <View className='orderDetail-item-radio'><AtIcon value='check' size='18' color='#fff'></AtIcon></View>
                </View>
              </View>
            )
          }
        </View>
        {discountVisible && <View class="orderDiscountTips">*积分优惠券二选一</View>}
        <View class="orderButton">
          <View className='totalPrice'>应付金额<Text className='mark'>￥</Text><Text className='price'>{ payAmount }</Text></View>
          { discountVisible && discountPrice !== 0 && <Text className='discountPrice'>已优惠￥{ discountPrice }</Text> }
          <Text className='buyButton' onClick={payNow}>立即付款</Text>
        </View>
      </AtFloatLayout>
      <CouponList
        couponListVisible={couponListVisible}
        onClose={() => setCouponListVisible(false)}
      />
    </View>
  )
}
