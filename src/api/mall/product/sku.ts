import request from '@/config/axios'

/**
 * 商品 SKU 选项
 */
export interface SkuOptioVO {
  /**
   * 商品 SKU 主键。
   */
  id: number
  /**
   * 商品 SKU 名字。
   */
  name?: string
  /**
   * 商品 SKU 销售价格。
   */
  price: string
  /**
   * 商品 SKU 库存。
   */
  stock: number
  /**
   * 商品 SPU 编号。
   */
  spuId: number
  /**
   * 商品 SPU 名字。
   */
  spuName: string
}

// 获得商品 SKU 选项的列表
export const getSkuOptionList = (): Promise<SkuOptioVO> => {
  return request.get({ url: '/product/sku/get-option-list' })
}
