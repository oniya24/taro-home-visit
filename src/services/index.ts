import request from './../utils/request';
import { IDepartment } from './../types/department';
import { IEmployee } from './../types/employee';

/**
 * 根据roleId获取部门
 * @param roleId 
 */
export const getDepartmentListByRoleId = (roleId: number) => {
  return request({
    url: `/getDepartment?roleId=${roleId}`, 
    method: 'POST',
  }) as Promise<IDepartment[]>
}

/**
 * 根据部门id获取成员
 * @param departmentId 
 * @returns 
 */
export const getEmployeeListByDepartmentId = (departmentId: number) => {
  return request({
    url: `/getEmployee?departmentId=${departmentId}`, 
    method: 'POST',
  }) as Promise<IEmployee[]>
}


/**
 * 根据手机号码登录
 * @param phone 
 * @returns 
 */
export const LoginByPhone = (phone: string) => {
  return request({
    url: `/toLogin?phone=${phone}`, 
    method: 'POST',
  }) as Promise<number>
}


