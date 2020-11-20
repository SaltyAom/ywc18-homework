import { h, FunctionComponent, Fragment } from "preact"

import AppBar from './appBar'
import Breadcrumb from './breadcrumb'

const AppLayout: FunctionComponent = ({ children }) => {
    return (
        <Fragment>
            <AppBar />
            <Breadcrumb />
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