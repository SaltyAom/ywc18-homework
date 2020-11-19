import { FunctionComponent, h } from 'preact'

import { StoreContext } from 'storeon/preact'

import { store } from './index'

const StoreProvider: FunctionComponent = ({ children }) => (
    <StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>
)

export default StoreProvider