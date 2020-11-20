import { StoreonModule } from 'storeon'

import SelectionAction from './constant'
import { SelectionEvent, SelectionStore } from './types'

const selection: StoreonModule<SelectionStore, SelectionEvent> = (store) => {
    store.on('@init', () => ({
        provinceSelection: 0,
        priceSelection: 0,
        categorySelection: -1,
        subCategorySelection: -1,
        search: '',
        isFilterOpen: false
    }))

    store.on(SelectionAction.CATEGORY, (store, categorySelection) => ({
        ...store,
        categorySelection,
        subCategorySelection: -1
    }))

    store.on(SelectionAction.SUB_CATEGORY, (store, subCategorySelection) => ({
        ...store,
        subCategorySelection
    }))

    store.on(SelectionAction.PRICE, (store, priceSelection) => ({
        ...store,
        priceSelection
    }))

    store.on(SelectionAction.PROVINCE, (store, provinceSelection) => ({
        ...store,
        provinceSelection
    }))

    store.on(SelectionAction.SEARCH, (store, search) => ({
        ...store,
        search: search.toLocaleLowerCase()
    }))

    store.on(SelectionAction.FILTER, (store, isFilterOpen) => ({
        ...store,
        isFilterOpen
    }))
}

export { SelectionAction }
export type { SelectionStore, SelectionEvent }
export default selection
