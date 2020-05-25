import Taro, { useState, useEffect, useRef } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabsPane } from 'taro-ui'
import ProductItem from '../ProductItem/index'
import './index.scss'
import * as api from './api'

export default function ProductTab ({ requestProductData, current, index, onClick })  {
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
      onClick(product)
    } else if (index === 1) {
      setProductDetail(product)
    }
  }
  useEffect(() => {
    console.log(current === index && !requested.current && Object.keys(requestProductData).length > 0, 2222222)
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
      <View className='productList'>
        { list.map(product => <ProductItem key={product.code} index={index} productInfo={product} onClick={handleProductClick} />) }
      </View>
      {
        Object.keys(productDetail).length && (
          <View class="flowProductDetail">
            <View class="flowProductDetail-info">
              <View className='title'>{ productDetail.name } {productDetail.tips && <Text className='tips'>{ productDetail.tips}</Text>}</View>
              <Text className='info'>{ productDetail.info }</Text>
            </View>
            <View class="flowProductDetail-buy">
              <View className='price'>￥{ productDetail.price }</View>
              <View className='button' onclick={() => onClick(productDetail)}>购买</View>
            </View>
          </View>
        )
      }
    </AtTabsPane>
  )
}
