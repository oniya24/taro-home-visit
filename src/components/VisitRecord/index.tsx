import { View, Image } from "@tarojs/components"
import { IVisitRecord } from 'src/types/visitRecord'
import { AtCard } from 'taro-ui'
import './index.less'

const VisitRecord = (props: IVisitRecord) => {
  return (
    <AtCard
      style={{ marginBottom: 10 }}
      extra={`被家访人: ${props.interviewees}`}
      title={props.visit}
    >
      <View>时间: {props.time}</View>
      <View>地点: {props.place}</View>
      <View>记录: {props.text}</View>
      <View><Image mode="widthFix" src={props.photo}></Image></View>
    </AtCard>
  )
}

export default VisitRecord