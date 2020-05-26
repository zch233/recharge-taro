import Taro, { useState } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import './index.scss'
import { AtFloatLayout, AtIcon, AtInput } from "taro-ui"

export default function CountryList ({ listVisible, onClose, onConfirm, countryList = [], currentCountry = {} })  {
  const [searchValue, setSearchValue] = useState('')
  const handleSearch = value => {
    setSearchValue(value)
  }

  return (
    <AtFloatLayout className='myCountryList' isOpened={listVisible} title="请选择您要充值的国家或地区" onClose={onClose}>
      <View className='searchBar'>
        <AtIcon value='search' size='23' color='rgb(150, 150, 150)'></AtIcon>
        <View className='searchInput'>
          <AtInput
            className='mySearchInput'
            name='value'
            type='text'
            border={false}
            placeholder='请输入你想要充值的国家或地区'
            value={searchValue}
            onChange={handleSearch}
          />
        </View>
      </View>
      <ScrollView className='countryList' scroll-y>
        {
          countryList.filter(v => v.searchKeyword.indexOf(searchValue.toLowerCase()) >= 0).map(country => (
            <View key={country.countryCode} className={`countryList-item ${currentCountry.countryCode === country.countryCode && 'active'}`} onClick={() => onConfirm(country)}>
              <View className='view-image'><Image className='image' mode='widthFix' lazyLoad src={`${IMAGE_URL}countryFlags/${country.ename}.svg`} /></View>
              <View className='areaNumber'>+{ country.areaNumber }</View>
              <View className='countryName'>{ country.cname }</View>
            </View>
          ))
        }
      </ScrollView>
    </AtFloatLayout>
  )
}
