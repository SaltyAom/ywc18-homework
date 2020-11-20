import { h, FunctionComponent, Fragment } from 'preact'

import { useStoreon } from 'storeon/preact'
import { APIEvent, APIStore } from '@stores/api'
import { SelectionEvent, SelectionStore } from '@stores/selection'

import AppBar from './appBar'
import Breadcrumb from './breadcrumb'
import Aside from './aside'

import './app-layout.styl'

const AppLayout: FunctionComponent = ({ children }) => {
    let { isLoading } = useStoreon<APIStore, APIEvent>('isLoading'),
        { isFilterOpen } = useStoreon<SelectionStore, SelectionEvent>(
            'isFilterOpen'
        )

    return (
        <Fragment>
            <AppBar />
            <Breadcrumb />
            <h3 class="main-title">
                ผลการค้นหา ร้านอาหารและเครื่องดื่มทั้งหมด
            </h3>
            <br />
            {isLoading && <section id="loading">Loading...</section>}
            <section id="layout" style={{ opacity: !isLoading ? 1 : 0 }}>
                <Aside />
                <main id="display" class={isFilterOpen ? '-filter-open' : ''}>
                    {children}
                </main>
            </section>
        </Fragment>
    )
}

export default AppLayout
