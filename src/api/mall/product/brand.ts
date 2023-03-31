import request from '@/config/axios'

/**
 * 产品品牌
 */
export interface BrandVO {
  /**
   * 品牌id
   */
  id?: number
  /**
   * 品牌名称
   */
  name: string
  /**
   * 品牌图片
   */
  picUrl: string
  /**
   * 品牌排序
   */
  sort: number
  /**
   * 品牌描述
   */
  description?: string
  /**
   * 状态
   */
  status: number
}

// 创建品牌
export const createBrand = (data: BrandVO): Promise<number> => {
  return request.post({ url: '/product/brand/create', data })
}

// 更新品牌
export const updateBrand = (data: BrandVO): Promise<boolean> => {
  return request.put({ url: '/product/brand/update', data })
}

// 删除品牌
export const deleteBrand = (id: number): Promise<boolean> => {
  return request.delete({ url: '/product/brand/delete?id=' + id })
}

// 获得品牌
export const getBrand = (id: number): Promise<BrandVO> => {
  return request.get({ url: '/product/brand/get?id=' + id })
}

// 获得品牌list
export const getBrandList = (): Promise<BrandVO[]> => {
  return request.get({ url: '/product/brand/list' })
}

// 获得品牌分页
export const getBrandPage = (params: PageParam & any) => {
  return request.get({ url: '/product/brand/page', params })
}
