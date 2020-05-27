import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import OverHeader from './components/OverHeader/index'
import InputBar from './components/InputBar/index'
import ProductBar from './components/ProductBar/index'

export default function Index ()  {
  const [requestProductData, setRequestProductData] = useState({})
  const [initTips, setInitTips] = useState('请选择国家输入号码')
  return (
    <View>
      <OverHeader />
      <InputBar setRequestProductData={data => setRequestProductData(data)} setInitTips={data => setInitTips(data)} />
      <ProductBar requestProductData={requestProductData} initTips={initTips} />
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '游全球',
}
