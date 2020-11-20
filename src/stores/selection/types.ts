import Selection from './constant'

export interface SelectionStore {
	categorySelection: number
	provinceSelection: number
	priceSelection: number
	subCategorySelection: number
	search: string
	isFilterOpen: boolean
}

export interface SelectionEvent {
	[Selection.CATEGORY]: number
	[Selection.PROVINCE]: number
	[Selection.PRICE]: number
	[Selection.SUB_CATEGORY]: number
	[Selection.SEARCH]: string
	[Selection.FILTER]: boolean
}