import { useState, useEffect } from 'react'
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { IEmployee } from '../../types/employee';
import { goUrl } from '../../utils/index';
import { getEmployeeListByDepartmentId } from '../../services/index';
import { AtList, AtListItem } from 'taro-ui'

const Department = () => {
  const [ employeeList, setEmployeeList ] = useState<IEmployee[]>()
  const $instance = Taro.getCurrentInstance()
  const id = $instance.router?.params.id
  
  useEffect(() => {
    id && getEmployeeListByDepartmentId(Number(id)).then((res) => setEmployeeList(res))
  }, [ id ])
  
  return (
    <View>
      <AtList>
        {
          employeeList?.map((item) => {
            return (
              <AtListItem arrow='right' title={item.name} note={`联系方式: ${item.phone}`} onClick={() => {
                goUrl(`/pages/employee/employee?id=${item.id}`)
              }}>
              </AtListItem>
            )
          })
        }
      </AtList>
    </View>
  )
}

export default Department