import Taro, { useState, useEffect, usePullDownRefresh, useReachBottom, useRef, useShareAppMessage } from '@tarojs/taro'
import { View, Picker, Text } from '@tarojs/components'
import './index.scss'
import * as api from './api'
import { AtList, AtListItem } from 'taro-ui'
import HFIcon from '@/static/HF.svg'
import LLIcon from '@/static/LL.svg'
import { wechatPay } from '@/utils/wechat'
import MTA from 'mta-wechat-analysis'

const status = {
  'processing': { text: '充值中..', color: '#ef8b0a' },
  'success': { text: '充值成功', color: '#1ac150' },
  'fail': { text: '充值失败', color: '#999999' },
  'exception': { text: '充值中...', color: '#ef8b0a' },
  'pay': { text: '充值中...', color: '#ef8b0a' },
  'confirm': { text: '充值中...', color: '#ef8b0a' },
  'close': { text: '订单关闭', color: '#999999' },
  'new_order': { text: '待支付', color: 'rgb(255, 196, 78)' },
}
function getFullDate (userDate) {
  var date = userDate || new Date()
  var seperator1 = '-'
  var seperator2 = ':'
  var seperator3 = ' '
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  var strhour = date.getHours()
  var strmin = date.getMinutes()
  var strsec = date.getSeconds()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  if (strhour >= 0 && strhour <= 9) {
    strhour = '0' + strhour
  }
  if (strmin >= 0 && strmin <= 9) {
    strmin = '0' + strmin
  }
  if (strsec >= 0 && strsec <= 9) {
    strsec = '0' + strsec
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
    seperator3 + strhour + seperator2 + strmin + seperator2 + strsec
  return currentdate
}

export default function Record ()  {
  const [orderList, setOrderList] = useState([])
  const [isLastPage, setIsLastPage] = useState(false)
  const currentPage = useRef()
  const getOrderList = async (pullRefresh) => {
    const { result } = await api.getRechargeRecord({ page: { pageSize: 10, currentPage: currentPage.current }, start: getFullDate() })
    const { list, isLastPage } = result.list
    setIsLastPage(isLastPage)
    if (pullRefresh) {
      setOrderList(list)
      pullRefresh && Taro.stopPullDownRefresh()
    } else {
      setOrderList([...orderList, ...list])
    }
  }
  usePullDownRefresh(() => {
    currentPage.current = 1
    getOrderList('pullRefresh')
  })
  useReachBottom(() => {
    if (!isLastPage) {
      currentPage.current += 1
      getOrderList()
    }
  })
  const payNow = async ({ yqqNo }) => {
    const { result } = await api.orderPayAgain(yqqNo)
    wechatPay(result || {}, yqqNo)
  }
  const closeOrder = async ({ yqqNo }) => {
    await api.cancelOrder(yqqNo)
    setOrderList(orderList.map(order => order.yqqNo === yqqNo ? (order.status = 'close') && order : order))
    Taro.showToast({ title: '关闭成功', icon: 'none', duration: 2000, mask: true })
  }
  useEffect(() => {
    currentPage.current = 1
    getOrderList()
    MTA.Event.stat("10003", {});
  }, [])
  useShareAppMessage(() => {
    return {
      title: '充值就上游全球',
      path: 'pages/index/index',
      imageUrl: require('@/static/poster.png'),
    }
  })

  return (
    <View className='order'>
      <View className='orderList'>
        {
          orderList.map(order => (
            <View key={order.yqqNo} class="orderList-item">
              <View class="itemInfo">
                <View className='view-image'><Image className='image' mode='widthFix' src={order.type === 'HF' ? HFIcon : LLIcon} /></View>
                <View class="itemInfo-mainInfo">
                  <Text className='account'>{ order.accountData || order.account }</Text>
                  <View className="title">{ order.body }</View>
                  <Text className='time'>{ order.created }</Text>
                </View>
                <View class="itemInfo-state" style={{ color: order.status && status[order.status].color }}>
                  <Text className='status'>{ order.status && status[order.status].text }</Text>
                  {order.originalPrice && <View className='price'>￥{ order.originalPrice }</View>}
                </View>
              </View>
              <View class="orderPrice">
                {order.selected && <Text className='discount'>使用{ order.selected === 'point' && '积分' || order.selected === 'coupon' && '优惠券' } : <Text style="color:#FE7E00"> -￥{ (order.originalPrice - order.payPrice).toFixed(2) }</Text></Text>}
                <Text className='price'>消费金额 : ￥{ order.payPrice }</Text>
                {order.status === 'new_order' && <Text className="button pay" onClick={() => payNow(order)}>立即支付</Text>}
                {order.status === 'new_order' && <Text className="button close" onClick={() => closeOrder(order)}>关闭订单</Text>}
              </View>
            </View>
          ))
        }
      </View>
      { isLastPage && <View className='emptyTips'>这是我的底线</View> }
    </View>
  )
}
Record.config = {
  navigationBarTitleText: '充值记录',
  enablePullDownRefresh: true,
  onReachBottomDistance: 50,
}
