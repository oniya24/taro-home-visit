import Taro from "@tarojs/taro"
export const baseDomain = `http://47.96.155.159:8080`

const request = async ({ method, url, data }:Taro.request.Option<any>) => {
  const res = await Taro.request({
    method: method,
    url: baseDomain + url,
    data: JSON.stringify(data),
    header: {
      'content-type': 'application/json' // 默认值
    },
    fail: (error) => {
      Taro.showToast({
        title: error.errMsg || error.errorMessage,
        icon: "error",
        duration: 2000
      })
    }
  })
  if(res.statusCode !== 200){
    throw new Error('Internal server error');
  }
  return res.data
} 

export const requestUploadFile = async ({ filePath, name = "fileUpload" }: Pick<Taro.uploadFile.Option, 'filePath' | 'name'>) => {
  const res = await Taro.uploadFile({
    url: baseDomain + '/upload',
    name: name,
    filePath: filePath,
    fileType: "image",
    success: (res) => {
      return res.data
    },
    fail: (error) => {
      Taro.showToast({
        title: error.errMsg || error.errorMessage,
        icon: "error",
        duration: 2000
      })
      throw new Error(error.errMsg || error.errorMessage)
    }
  })
  return res
} 


export default request