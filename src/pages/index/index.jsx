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
  const xxxxxxxxxxx = () => {
    const tmplIds = '8Q9-cY0jD1FTK59AqcDcGSKj5ZBC5uw1zdDcglsqyRA'
    Taro.requestSubscribeMessage({
      tmplIds: [tmplIds],
      async success (res) {
        if (res[tmplIds] === 'accept') {
          await subscribe('202005281558153480510578')
        }
      },
      fail (err) {
        console.log(err)
      },
    })
  }
  return (
    <View>
      <OverHeader />
      <InputBar setBalanceQuery={data => setBalanceQuery(data)} setProductDisabled={data => setProductDisabled(data)} setRequestProductData={data => setRequestProductData(data)} setInitTips={data => setInitTips(data)} />
      <ProductBar balanceQuery={balanceQuery} productDisabled={productDisabled} requestProductData={requestProductData} initTips={initTips} />
      <Button onClick={xxxxxxxxxxx}>测试专用，误点。</Button>
      <Navigator className='bottomOrderList' url='/pages/record/record'>充值记录</Navigator>
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '游全球',
}
