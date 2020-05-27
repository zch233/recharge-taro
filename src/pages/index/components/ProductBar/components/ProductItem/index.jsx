import Taro, { useMemo } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default function ProductItem ({ handleProductClick, productInfo = {}, index, productDisabled, currentProduct = {} })  {
  const itemClass = useMemo(() => {
    console.log(`ProductItem ${currentProduct.code === productInfo.code && 'active'} ${productDisabled && 'disabled'}`)
    return 123
  }, [productDisabled, currentProduct])
  return (
    <View className={`ProductItem ${currentProduct.code === productInfo.code && 'active'} ${productDisabled && 'disabled'}`} onClick={() => handleProductClick(productInfo)}>
      {productInfo.hotTips && <View className='hotTips'>{productInfo.hotTips}</View>}
      <View className='name'>{productInfo.name}{index === 1 && productInfo.tips && <Text className='days'>（{productInfo.tips}）</Text>}</View>
      {productInfo.price && <View className='price'>售价{productInfo.price.toFixed(2)}元</View>}
    </View>
  )
}
