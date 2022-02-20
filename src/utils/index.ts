import Taro from '@tarojs/taro';


export const goUrl = (url: string) => {
  return Taro.navigateTo({
    url: url
  })
}