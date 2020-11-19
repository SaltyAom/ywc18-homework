import { h, FunctionComponent } from 'preact'
import { StoreProvider } from '@stores'

const AppProvider: FunctionComponent = ({ children }) => {
    return <StoreProvider>{children}</StoreProvider>
}

export default AppProvider