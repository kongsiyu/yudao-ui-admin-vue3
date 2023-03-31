import request from '@/config/axios'
import { PropertyValueDetailVO } from './property'
/**
 * 商品 SPU
 */
export interface SpuVO {
  /**
   * 商品 SPU 主键。
   */
  id: number
  /**
   * 商品名称
   */
  name: string
  /**
   * 商品编码
   */
  code?: string
  /**
   * 促销语
   */
  sellPoint?: string
  /**
   * 商品详情
   */
  description: string
  /**
   * 商品分类编号
   */
  categoryId: number
  /**
   * 商品品牌编号
   */
  brandId?: number
  /**
   * 商品图片的数组
   */
  picUrls: string[]
  /**
   * 商品视频
   */
  videoUrl?: string
  /**
   * 排序字段
   */
  sort?: number
  /**
   * 商品状态
   */
  status: number
  /**
   * 规格类型
   */
  specType: number
  /**
   * 是否展示库存
   */
  showStock: boolean
  /**
   * 市场价
   */
  marketPrice?: number
  /**
   * 虚拟销量
   */
  virtualSalesCount: number
}
/**
 * 商品 SPU 详细
 */
export interface SpuDetailVO extends SpuVO {
  /**
   * SKU数组
   */
  skus: SkuVO[]
}
export interface SkuVO {
  /**
   * 属性数组
   */
  properties: PropertyValueDetailVO[]
}

export interface SpuSimpleVo {
  /**
   * 商品 SPU 主键。
   */
  id: number
  /**
   * 商品名称
   */
  name: string
  /**
   * 最小价格，单位使用：分
   */
  minPrice: number
  /**
   * 最大价格，单位使用：分
   */
  maxPrice: number
}

// 创建商品 SPU
export const createSpu = (data: SpuVO) => {
  return request.post({ url: '/product/spu/create', data })
}

// 更新商品 SPU
export const updateSpu = (data: SpuVO) => {
  return request.put({ url: '/product/spu/update', data })
}

// 删除商品 SPU
export const deleteSpu = (id: string) => {
  return request.delete({ url: `/product/spu/delete?id=${id}` })
}

// 获得商品 SPU 详情
export const getSpuDetail = (id: string): Promise<SpuDetailVO> => {
  return request.get({ url: `/product/spu/get-detail?id=${id}` })
}

// 获得商品 SPU 分页
export const getSpuPage = (query: any) => {
  return request.get({ url: '/product/spu/page', params: query })
}

// 获得商品 SPU 精简列表
export const getSpuSimpleList = (): Promise<SpuSimpleVo> => {
  return request.get({ url: '/product/spu/get-simple-list' })
}
