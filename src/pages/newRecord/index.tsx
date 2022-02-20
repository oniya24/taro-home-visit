import { Form, View, Picker, Button, Image  } from "@tarojs/components";
import { useCallback, useState } from 'react'
import Taro from "@tarojs/taro";
import { createVisitRecord } from "../../services/visitRecord";
import { requestUploadFile } from "../../utils/request";
import { goUrl } from "../../utils";
import { AtInput, AtList, AtListItem, AtTextarea } from 'taro-ui'

const NewRecord = () => {
  const $instance = Taro.getCurrentInstance()
  const id = $instance.router?.params.id
  const [ submitLoading, setSubmitLoading ] = useState(false)
  const [ formData, setFormData ] = useState({
    visit: '',
    interviewees: '',
    place: '',
    time: '',
    text: '',
    photo: '',
  }) 
  const handleFormChange = useCallback((newData: Partial<typeof formData>) => {
    setFormData({
      ...formData,
      ...newData
    })
  }, [ formData ])
  const handleFormSubmit = useCallback(async (e) => {
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
      await createVisitRecord({
        ...formData,
        userId: id!
      })
      Taro.showToast({
        title: "创建成功",
        icon: 'success',
        duration: 2000
      })
      goUrl(`/pages/employee/employee?id=${id}`)
    } catch(e) {
      console.log("error", e)
    } finally {
      setSubmitLoading(false)
    }
  }, [ id, formData ])
  return (
    id && 
    <Form onSubmit={handleFormSubmit} >
      <View className='form-item'>
        <AtInput type='text' title='家访人' placeholder="请输入家访人" name="visit" onChange={(val:'') => { handleFormChange({ visit: val })}}></AtInput>
      </View>
      <View className='form-item'>
        <AtInput type='text' title='被家访人' placeholder="请输入被家访人" name="interviewees" onChange={(val:'') => { handleFormChange({ interviewees: val })}}></AtInput>
      </View>
      <View className='form-item'>
        <AtInput type='text' title='地点' placeholder='请输入地点' name="place" onChange={(val:'') => { handleFormChange({ place: val })}}></AtInput>
      </View>
      <View className='form-item'>
        <Picker value={formData.time} fields='day' mode='date' onChange={(e) => { handleFormChange({ time: e.detail.value })}}>
          <AtList>
            <AtListItem title='请选择日期'  extraText={formData.time} />
          </AtList>
        </Picker>
      </View>
      <View className='form-item'>
        <AtListItem title='请输入家访记录'></AtListItem>
        <AtTextarea placeholder="请输入家访记录" onChange={(value) => { handleFormChange({ text: value }); } } value={formData.text}></AtTextarea>
      </View>
      <AtListItem title='请选择图片'>
        </AtListItem>
      {
        !!formData.photo ? 
        <Image src={formData.photo}></Image> :
        <Button onClick={() => {
          Taro.chooseImage({
            count: 1, // 默认9
            sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera' ], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
            success: async (res)  => {
              // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
              var tempFilePaths = res.tempFilePaths
              const uploadRes = await requestUploadFile({
                name: "fileUpload",
                filePath: tempFilePaths[0]
              })
              //@ts-ignore
              handleFormChange({
                photo: uploadRes.data
              })
            }
          })
        }}>        <AtListItem title='点击上传图片'>
        </AtListItem></Button>
      }
      <View className='form-item'>
        <Button loading={submitLoading} type='primary' formType='submit'>提交</Button>  
      </View>
    </Form>
  )
}

export default NewRecord