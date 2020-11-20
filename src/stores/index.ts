import { createStoreon } from 'storeon'

import api, { APIAction, APIEvent, APIStore } from './api'
import selection, {
    SelectionAction,
    SelectionEvent,
    SelectionStore
} from './selection'

export const store = createStoreon<any>([api, selection])

export { api, APIAction, selection, SelectionAction }
export type {
    APIEvent,
    APIStore,
    SelectionEvent,
    SelectionStore
}
export { default as StoreProvider } from './provider'
