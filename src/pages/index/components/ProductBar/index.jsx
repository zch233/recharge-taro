import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import { AtTabs, AtTabsPane } from 'taro-ui'
import ProductItem from './components/ProductItem/index'
import Order from './components/Order/index'
import ProductTab from './components/ProductTab/index'
import * as api from './api'

export default function ProductBar ({ requestProductData = {}, initTips })  {
  const tabList = [{ title: '充话费' }, { title: '充流量' }, { title: '余额查询' }]
  const [activeTab, setActiveTab] = useState(0)
  const [orderVisible, setOrderVisible] = useState(false)
  const handleProductClick = () => {
    setOrderVisible(true)
  }
  useEffect(() => {
    if (Object.keys(requestProductData).length > 0) {
      setActiveTab(0)
    }
  }, [requestProductData])
  return (
    <View>
      <AtTabs className="myProductTab" current={activeTab} tabList={tabList} onClick={index => setActiveTab(index)}>
        <ProductTab onClick={handleProductClick} initTips={initTips} requestProductData={requestProductData} current={activeTab} index={0} />
        <ProductTab onClick={handleProductClick} initTips={initTips} requestProductData={requestProductData} current={activeTab} index={1} />
        <AtTabsPane current={activeTab} index={2}>
          <View className='productList'>请选择国家或地区再输入号码</View>
        </AtTabsPane>
      </AtTabs>
      <Order orderVisible={orderVisible} onClose={() => setOrderVisible(false)} />
    </View>
  )
}
