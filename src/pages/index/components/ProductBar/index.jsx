import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Order from './components/Order/index'
import WaitOrder from './components/WaitOrder/index'
import ProductTab from './components/ProductTab/index'
import * as api from './api'

export default function ProductBar ({ requestProductData = {}, initTips, productDisabled })  {
  const tabList = [{ title: '充话费' }, { title: '充流量' }, { title: '余额查询' }]
  const [activeTab, setActiveTab] = useState(0)
  const [orderVisible, setOrderVisible] = useState(false)
  const [waitOrderVisible, setWaitOrderVisible] = useState(false)
  const [orderData, setOrderData] = useState({})
  const [waitOrderData, setWaitOrderData] = useState({})
  const getPreOrderInfo = async product => {
    const { result } = await api.getPreOrderInfo(product.code)
      const { userWaitOrder, ...orderInfo } = result || {}
      const waitOrderInfo = (userWaitOrder || []).filter(v => requestProductData.account.indexOf(v.account) >= 0)[0]
      return { waitOrderInfo, orderInfo }
  }
  const handleBuyClick = async product => {
    const { waitOrderInfo, orderInfo } = await getPreOrderInfo(product)
    setOrderData({...orderInfo, ...product, ...requestProductData})
    console.log({...orderInfo, ...product, ...requestProductData})
    if (waitOrderInfo) {
      setWaitOrderData(waitOrderInfo)
      setWaitOrderVisible(true)
    } else {
      setOrderVisible(true)
    }
  }
  useEffect(() => {
    if (Object.keys(requestProductData).length > 0) {
      setActiveTab(0)
    }
  }, [requestProductData])
  return (
    <View>
      <AtTabs className="myProductTab" current={activeTab} tabList={tabList} onClick={index => setActiveTab(index)}>
        <ProductTab productDisabled={productDisabled} handleBuyClick={handleBuyClick} initTips={initTips} requestProductData={requestProductData} current={activeTab} index={0} />
        <ProductTab productDisabled={productDisabled} handleBuyClick={handleBuyClick} initTips={initTips} requestProductData={requestProductData} current={activeTab} index={1} />
        <AtTabsPane current={activeTab} index={2}>
          <View className='productList'>请选择国家或地区再输入号码</View>
        </AtTabsPane>
      </AtTabs>
      <Order orderData={orderData} orderVisible={orderVisible} onClose={() => setOrderVisible(false)} />
      <WaitOrder waitOrderData={waitOrderData} waitOrderVisible={waitOrderVisible} onClose={() => { setWaitOrderVisible(false);setOrderVisible(true) }} />
    </View>
  )
}
