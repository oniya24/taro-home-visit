import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React, { useCallback } from "react";
import './index.less'

interface IProps {
  src: string
}
const ImageBox = ({
  src
}: IProps) => {
  const handlePreview = useCallback(() => {
    Taro.previewImage({
      current: src, // 当前显示图片的http链接
      urls: [ src ] // 需要预览的图片http链接列表
    })
  }, [ src ])
  return(
    <View className="imageBox">
      <Image className="imageInner" src={src} onClick={handlePreview}></Image>
    </View>
  )
}

export default ImageBox