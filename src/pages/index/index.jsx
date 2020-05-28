import Taro, { useState } from '@tarojs/taro'
import { View, Navigator, Button } from '@tarojs/components'
import './index.scss'
import OverHeader from './components/OverHeader/index'
import InputBar from './components/InputBar/index'
import ProductBar from './components/ProductBar/index'
import { subscribe } from '@/utils/api'

export default function Index ()  {
  const [requestProductData, setRequestProductData] = useState({})
  const [initTips, setInitTips] = useState('请选择国家输入号码')
  const [productDisabled, setProductDisabled] = useState(false)
  const [balanceQuery, setBalanceQuery] = useState('')

  return (
    <View>
      <OverHeader />
      <InputBar setBalanceQuery={data => setBalanceQuery(data)} setProductDisabled={data => setProductDisabled(data)} setRequestProductData={data => setRequestProductData(data)} setInitTips={data => setInitTips(data)} />
      <ProductBar balanceQuery={balanceQuery} productDisabled={productDisabled} requestProductData={requestProductData} initTips={initTips} />
      <Navigator className='bottomOrderList' url='/pages/record/record'>充值记录</Navigator>
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '游全球',
}
