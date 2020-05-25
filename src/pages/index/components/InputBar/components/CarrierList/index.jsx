import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import { AtFloatLayout, AtIcon } from "taro-ui"

export default function CountryList ({ listVisible, onClose, onConfirm, carrierList = [], currentCarrier = {} })  {

  return (
    <AtFloatLayout className='myCarrierList' isOpened={listVisible} title='请选择运营商' onClose={onClose}>
      <View className='carrierList'>
        {
          carrierList.map(carrier => (
            <View key={carrier.carrierName} className='carrierList-item' onClick={() => onConfirm(carrier)}>
              <View className='view-image'><Image className='image' mode='widthFix' src={carrier.carrierImgUrl + '?x-oss-process=image/resize,w_100'} /></View>
              <View className='name'>{carrier.carrierName}</View>
              <View className={`check ${carrier.carrierName === currentCarrier.carrierName && 'selected'}`}><AtIcon value='check' size='18' color='#fff'></AtIcon></View>
            </View>
          ))
        }
      </View>
    </AtFloatLayout>
  )
}
