import { Categories, Merchants } from '@models/base'

export interface API {
    categories: Categories
    provinces: string[]
    priceRange: string[]
    merchants: Merchants
}
