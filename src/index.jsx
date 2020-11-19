import { h, render } from 'preact'
import 'preact/devtools'

import { Landing } from '@pages'
import { AppProvider, AppLayout } from '@layouts'

import '@styles/base.styl'

render(
    <AppProvider>
        <AppLayout>
            <Landing />
        </AppLayout>
    </AppProvider>,
    document.getElementById('root')
)