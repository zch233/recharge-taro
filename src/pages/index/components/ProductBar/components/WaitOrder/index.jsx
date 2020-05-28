import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import './index.scss'
import * as api from '@/pages/record/api'
import { wechatPay } from '@/utils/wechat'

export default function WaitOrder ({ waitOrderVisible, onClose, waitOrderData = {} })  {
  const closeOrder = async () => {
    await api.cancelOrder(waitOrderData.yqqNo)
    onClose()
  }
  const payAgain = async () => {
    const { result } = await api.orderPayAgain(waitOrderData.yqqNo)
    wechatPay(result || {}, waitOrderData.yqqNo)
  }
  return (
    <AtModal
      isOpened={waitOrderVisible}
      onClose={onClose}
    >
      <AtModalHeader className='waitOrder-title'>您有一笔待支付订单</AtModalHeader>
      <AtModalContent>
        <View class="waitOrder-content">
          <View class="waitOrder-content-item">
            <Text className='label'>订单详情：</Text>
            <Text className='value'>{ waitOrderData.body }</Text>
          </View>
          <View class="waitOrder-content-item">
            <Text className='label'>手机号码：</Text>
            <Text className='value'>{ waitOrderData.account }</Text>
          </View>
          <View class="waitOrder-content-item">
            <Text className='label'>原价：</Text>
            <Text className='value'>￥{ (waitOrderData.totalAmount / 100).toFixed(2) }</Text>
          </View>
          {
            waitOrderData.totalAmount - waitOrderData.payPrice !== 0 && (
              <View class="waitOrder-content-item">
                <Text className='label'>优惠：</Text>
                <Text  className='value discount'>-￥{ ((waitOrderData.totalAmount - waitOrderData.payPrice) / 100).toFixed(2) }({ waitOrderData.uuid ? '优惠券' : '积分' })</Text>
              </View>
            )
          }
          <View class="waitOrder-content-item">
            <Text className='label'>支付金额：</Text>
            <Text className='value payPrice'>￥{ (waitOrderData.payPrice / 100).toFixed(2) }</Text>
          </View>
        </View>
      </AtModalContent>
      <AtModalAction><Button onClick={closeOrder}>关闭订单</Button><Button onClick={payAgain}>立即支付</Button></AtModalAction>
    </AtModal>
  )
}
