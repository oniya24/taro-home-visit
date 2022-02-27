import { View, Image } from "@tarojs/components"
import { IVisitRecord } from 'src/types/visitRecord'
import { AtCard } from 'taro-ui'
import './index.less'

const VisitRecord = ({
  interviewees,
  visit,
  place,
  text,
  time,
  photo
}: IVisitRecord) => {
  return (
    <AtCard
      style={{ marginBottom: 10 }}
      extra={`被家访人: ${interviewees}`}
      title={visit}
    >
      <View>时间: {time}</View>
      <View>地点: {place}</View>
      <View>记录: {text}</View>
      <View>
        {
          photo.map((photoSrc) => {
            return <Image style={{ width: '30vw', height: '30vw', padding: '1vw' }} src={photoSrc}></Image>
          })
        }
      </View>
    </AtCard>
  )
}

export default VisitRecord

