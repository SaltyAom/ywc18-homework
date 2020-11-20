export interface Merchant {
    shopNameTH: string
    categoryName: string
    subcategoryName: string
    coverImageId: string
    facilities: string[]
    priceLevel: 0 | 1 | 2 | 3 | 4
    isOpen: "Y" | "N"
    highlightText: string
    recommendedItems: string[]
    addressProvinceName: string
    addressDistrictName: string
}

export type Merchants = Merchant[]