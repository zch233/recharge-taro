import Taro, { useState, useEffect, useRef } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabsPane } from 'taro-ui'
import ProductItem from '../ProductItem/index'
import './index.scss'
import * as api from './api'

export default function ProductTab ({ requestProductData = {}, current, index, handleBuyClick, initTips, productDisabled })  {
  const [list, setList] = useState([])
  const [currentProduct, setCurrentProduct] = useState({})
  const requested = useRef()
  const getProductList = async (requestProductData) => {
    const { result } = await api.getProductList(requestProductData)
    setCurrentProduct({})
    requested.current = true
    setList(result || [])
  }
  const handleProductClick = product => {
    setCurrentProduct(product)
    if (index === 0) {
      handleBuyClick(product)
    } else if (index === 1) {
      setTimeout(() => {
        Taro.pageScrollTo({
          duration: 300,
          scrollTop: 300,
        })
      })
    }
  }
  useEffect(() => {
    if (current === index && !requested.current && Object.keys(requestProductData).length > 0) {
      console.log('请求数据')
      getProductList({ ...requestProductData, type: index === 0 ? 'HF' : 'LL' })
    }
  }, [current])
  useEffect(() => {
    if (Object.keys(requestProductData).length > 0) {
      requested.current = false
      current === index && getProductList({ ...requestProductData, type: index === 0 ? 'HF' : 'LL' })
    } else {
      setList([])
    }
  }, [requestProductData])
  return (
    <AtTabsPane current={current} index={index} >
      {
        Object.keys(requestProductData).length > 0 ? (
          list.length ? (
            <View className='productList'>
              { list.map(product => <ProductItem key={product.code} currentProduct={currentProduct} productDisabled={productDisabled} index={index} productInfo={product} handleProductClick={handleProductClick} />) }
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
        index === 1 && Object.keys(currentProduct).length && (
          <View class="flowProductDetail">
            <View class="flowProductDetail-info">
              <View className='title'>{ currentProduct.name } {currentProduct.tips && <Text className='tips'>{ currentProduct.tips}</Text>}</View>
              <Text className='info'>{ currentProduct.info }</Text>
            </View>
            <View class="flowProductDetail-buy">
              <View className='price'>￥{ currentProduct.price }</View>
              <View className='button' onClick={() => handleBuyClick(currentProduct)}>购买</View>
            </View>
          </View>
        )
      }
    </AtTabsPane>
  )
}
