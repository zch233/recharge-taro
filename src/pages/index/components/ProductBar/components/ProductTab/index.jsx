import Taro, { useState, useEffect, useRef } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabsPane } from 'taro-ui'
import ProductItem from '../ProductItem/index'
import './index.scss'
import * as api from './api'

export default function ProductTab ({ requestProductData = {}, current, index, handleBuyClick, initTips })  {
  const [list, setList] = useState([])
  const [productDetail, setProductDetail] = useState({})
  const requested = useRef()
  const getProductList = async (requestProductData) => {
    const { result } = await api.getProductList(requestProductData)
    requested.current = true
    setList(result || [])
  }
  const handleProductClick = product => {
    if (index === 0) {
      handleBuyClick(product)
    } else if (index === 1) {
      Taro.pageScrollTo({
        duration: 300,
        selector: '.flowProductDetail',
      })
      setProductDetail(product)
    }
  }
  useEffect(() => {
    if (current === index && !requested.current && Object.keys(requestProductData).length > 0) {
      console.log('请求数据')
      getProductList({ ...requestProductData, type: index === 0 ? 'HF' : 'LL' })
    }
  }, [current])
  useEffect(() => {
    if (current === index && Object.keys(requestProductData).length > 0) {
      getProductList({ ...requestProductData, type: index === 0 ? 'HF' : 'LL' })
    }
  }, [requestProductData])
  return (
    <AtTabsPane current={current} index={index} >
      {
        Object.keys(requestProductData).length > 0 ? (
          list.length ? (
            <View className='productList'>
              { list.map(product => <ProductItem key={product.code} index={index} productInfo={product} handleProductClick={handleProductClick} />) }
            </View>
          ) : (
            <View class="product-empty">
              <View className='view-image'><Image className='image' mode='widthFix' lazyLoad src={require('@/static/qrcode.jpg')} /></View>
              <View className='tips'>产品维护中，如需充值请联系客服</View>
            </View>
          )
        ) : (
          Object.keys(requestProductData).length === 0 && <View className='initTips'>{ initTips }</View>
        )
      }
      {
        Object.keys(productDetail).length && (
          <View class="flowProductDetail">
            <View class="flowProductDetail-info">
              <View className='title'>{ productDetail.name } {productDetail.tips && <Text className='tips'>{ productDetail.tips}</Text>}</View>
              <Text className='info'>{ productDetail.info }</Text>
            </View>
            <View class="flowProductDetail-buy">
              <View className='price'>￥{ productDetail.price }</View>
              <View className='button' onclick={() => handleBuyClick(productDetail)}>购买</View>
            </View>
          </View>
        )
      }
    </AtTabsPane>
  )
}
