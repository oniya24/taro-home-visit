export interface IVisitRecord {
  id: number
  /** 家访人 */
  visit: string
  /** 家访对象 */
  interviewees: string
  /** 图片 */
  photo: string
  /** 地点 */
  place: string
  /** 时间 */
  time: string
  /** 访谈记录 */
  text: string
}