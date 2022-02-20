import { View,Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react'
import { IVisitRecord } from 'src/types/visitRecord';
import { getRecordsByUserId } from './../../services/visitRecord'
import VisitRecord from '../../components/VisitRecord';
import { goUrl } from './../../utils/index';
import { AtListItem, } from 'taro-ui'

const Employee = () => {
  const [ visitRecords, setVisitRecords ] = useState<IVisitRecord[]>()
  const $instance = Taro.getCurrentInstance()
  const id = $instance.router?.params.id
  useEffect(() => {
    id && getRecordsByUserId(Number(id)).then((res) => {
      setVisitRecords(res)
    })
  }, [ id ])
  return (
    <View>
      <View className='at-row' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
        <AtListItem title="家访记录"/>
        <Button plain size="mini" type='primary' onClick={() => goUrl(`/pages/newRecord/index?id=${id}`)}>新建家访</Button>
      </View>
      <View>
        {
          visitRecords && visitRecords.length !== 0 ? 
          visitRecords.map((item)=>{
            return (<VisitRecord {...item}></VisitRecord>)
          }) :
          "暂无数据"
        }
      </View>
    </View>
  )
}

export default Employee