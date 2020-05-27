import Taro, { useRouter, useMemo } from '@tarojs/taro'
import { View, WebView  } from '@tarojs/components'

export default function WebFrame ()  {
  const router = useRouter()
  const href = useMemo(() => {
    return router.params && router.params.href || ''
  }, [router])

  return (
    <View>
      <WebView src={href.indexOf('http') >= 0 ? href : `${WEBVIEW_URL}/${href}`} />
    </View>
  )
}
WebFrame.config = {
  navigationBarTitleText: '温馨提示'
}
