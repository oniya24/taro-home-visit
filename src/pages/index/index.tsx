import { useEffect, useState } from 'react'
import { View, Button  } from '@tarojs/components'
import { getDepartmentListByRoleId } from '../../services/index'
import { IDepartment } from '../../types/department'
import { goUrl } from '../../utils/index' 
import { AtList, AtListItem, AtNoticebar } from 'taro-ui'
import './index.less'
import Taro from '@tarojs/taro'

const Index = () => {
  const [ departmentList, setDepartmentList ] = useState<IDepartment[]>()
  const $instance = Taro.getCurrentInstance()
  const roleId = $instance.router?.params.roleId
  useEffect(() => {
    roleId && getDepartmentListByRoleId(Number(roleId)).then((res) => {
      setDepartmentList(res)
    })
  }, [roleId])
  
  return (
    <View className='index' >
      <AtNoticebar>近期雨雪天气频发，请注意道路安全</AtNoticebar>
      <AtList>
        {
          departmentList?.map((item) => {
            return (
              <AtListItem arrow='right' title={item.departmentName} onClick={() => {
                goUrl(`/pages/department/department?id=${item.id}`)
              }}>
              </AtListItem>
            )
          })
        }
      </AtList>
    </View>
  )
}

export default Index