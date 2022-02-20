import { IVisitRecord } from "../types/visitRecord"
import request from "../utils/request"


/**
 * 根据用户id 获取家访记录
 * @param userId 
 * @returns 
 */
export const getRecordsByUserId = (userId: number) => {
  return request({
    url: `/getRecord?userId=${userId}`, 
    method: 'POST',
  }) as Promise<IVisitRecord[]>
}


/**
 * 创建记录
 * @param data 
 * @returns 
 */
export const createVisitRecord = (
  data: 
  Exclude<IVisitRecord, 'id'> |
  {
    userId: string
  }
) => {
  console.log(" hhjh data",data)
  return request({
    url: `/insertRecord`, 
    method: 'POST',
    data: data,
  }) as Promise<number>
}