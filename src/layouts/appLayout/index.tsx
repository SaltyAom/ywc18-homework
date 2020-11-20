import { h, FunctionComponent, Fragment } from 'preact'

import AppBar from './appBar'
import Breadcrumb from './breadcrumb'
import Aside from './aside'

import './app-layout.styl'

const AppLayout: FunctionComponent = ({ children }) => {
    return (
        <Fragment>
            <AppBar />
            <Breadcrumb />
            <h3 class="main-title">
                ผลการค้นหา ร้านอาหารและเครื่องดื่มทั้งหมด
            </h3>
            <br />
            <main id="layout">
                <Aside />
                {children}
            </main>
            <footer></footer>
        </Fragment>
    )
}

export default AppLayout
