export interface Merchant {
    shopNameTH: string
    categoryName: string
    subCategoryName: string
    coverImageId: string
    facilities: string[]
    priceLevel: number
    isOpen: "Y" | "N"
    highlightText: string
    recommendedItems: string[]
    addressProvinceName: string
    addressDistrictName: string
}

export type Merchants = Merchant[]