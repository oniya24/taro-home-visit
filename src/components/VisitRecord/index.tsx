import { View, Image } from "@tarojs/components"
import { IVisitRecord } from 'src/types/visitRecord'
import { AtCard } from 'taro-ui'
import ImageBox from '../ImageBox'
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
      title={`${visit}家访记录`}
    >
      <View className="VisitListItem">{`被家访人: ${interviewees}`}</View>
      <View className="VisitListItem">时间: {time}</View>
      <View className="VisitListItem">地点: {place}</View>
      <View className="VisitListItem">记录: {text}</View>
      <View style={{ display: 'flex' }}>
        {
          photo.map((photoSrc) => {
            return (
              <View style={{ width: '30%', padding: 4 }}>
                <ImageBox src={photoSrc}></ImageBox>
              </View>
            ) 
          })
        }
      </View>
    </AtCard>
  )
}

export default VisitRecord

