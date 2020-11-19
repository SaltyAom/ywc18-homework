import { h, FunctionComponent, Fragment } from "preact"
import AppBar from './appBar'

const AppLayout: FunctionComponent = ({ children }) => {
    return (
        <Fragment>
            <AppBar />
            <main>
                <aside>
                    
                </aside>
                {children}
            </main>
            <footer>

            </footer>
        </Fragment>
    )
}

export default AppLayout