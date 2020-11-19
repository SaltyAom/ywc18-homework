import { createStoreon } from 'storeon'

import search from './search'

export const store = createStoreon<any>([search])

export { default as StoreProvider } from './provider'

export {
    search
}