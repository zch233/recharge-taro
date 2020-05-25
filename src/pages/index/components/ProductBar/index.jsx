import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtTabs, AtTabsPane } from 'taro-ui'
import ProductItem from './components/ProductItem/index'
import Order from './components/Order/index'

export default function ProductBar ({ requestProductData })  {
  const tabList = [{ title: '充话费' }, { title: '充流量' }, { title: '余额查询' }]
  const [activeTab, setActiveTab] = useState(0)
  const [orderVisible, setOrderVisible] = useState(false)
  const clickTab = (index) => {
    setActiveTab(index)
  }
  useEffect(() => {
    setActiveTab(0)
    console.log(requestProductData, 12121)
  }, [requestProductData])
  return (
    <View className="ProductBar">
      <AtTabs className="myProductTab" current={activeTab} tabList={tabList} onClick={clickTab}>
        <AtTabsPane current={activeTab} index={0} >
          <View className='productList'>
            <ProductItem onClick={() => setOrderVisible(true)} />
          </View>
        </AtTabsPane>
        <AtTabsPane current={activeTab} index={1}>
          <View className='productList'>
          </View>
        </AtTabsPane>
        <AtTabsPane current={activeTab} index={2}>
          <View className='productList'>请选择国家或地区再输入号码</View>
        </AtTabsPane>
      </AtTabs>
      <Order orderVisible={orderVisible} onClose={() => setOrderVisible(false)} />
    </View>
  )
}
