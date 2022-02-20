import { AtInput } from 'taro-ui'
import Taro from '@tarojs/taro'
import { Form, Button,View } from '@tarojs/components'
import { useState, useCallback } from 'react'
import { LoginByPhone } from '../../services/index'
import { goUrl } from '../../utils'


const Login = () => {

  const [ submitLoading, setSubmitLoading ] = useState(false)

  const [ formData, setFormData ] = useState({
    phone: ''
  })  
  const handleFormChange = useCallback((newData: Partial<typeof formData>) => {
    setFormData({
      ...formData,
      ...newData
    })
  }, [ formData ])

  const handleSubmit = useCallback(async () => {
    console.log("formData", formData)
    // 这里做校验
    try {
      Object.keys(formData).forEach((key) => {
        if(formData[key] == null || formData[key] == undefined || formData[key] == ''){
          throw new Error("输入有误")
        }
      })
    } catch(e) {
      Taro.showToast({
        title: "输入有无，请检查",
        icon: 'error',
        duration: 1000
      })
      return 
    }

    try {
      setSubmitLoading(true)
      const roleId = await LoginByPhone(formData.phone)
      console.log(roleId)
      Taro.showToast({
        title: "登录成功",
        icon: 'success',
        duration: 1000
      })
      goUrl(`/pages/index/index?roleId=${roleId}`)
    } catch(e) {
      console.log("error", e)
    } finally {
      setSubmitLoading(false)
    }
  }, [ formData ])
  return (
    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Form onSubmit={handleSubmit}>
        <AtInput 
          name='phone' 
          title='手机号' 
          type='text' 
          placeholder='请输入手机号' 
          value={formData.phone} 
          onChange={(val: '') => { handleFormChange({ phone: val })}} 
        />
        <Button disabled={submitLoading} loading={submitLoading} type='primary' formType='submit'>登录</Button>
      </Form>
    </View>
  )
}


export default Login