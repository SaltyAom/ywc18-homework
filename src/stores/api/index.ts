import { StoreonModule } from 'storeon'

import APIAction from './constant'
import { APIStore, APIEvent } from './types'

const api: StoreonModule<APIStore, APIEvent> = (store) => {
    store.on('@init', () => ({
        categories: [],
        provinces: [],
        priceRange: [],
        merchants: [],
        isLoading: true
    }))

    store.on(APIAction.UPDATE, (store, api) => ({ ...store, ...api }))
    store.on(APIAction.LOADING, (store, isLoading) => ({
        ...store,
        isLoading
    }))
}

export { APIAction }
export type { APIStore, APIEvent }
export default api
