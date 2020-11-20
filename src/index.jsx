import { h, render } from 'preact'
import 'preact/devtools'

import { Landing } from '@pages'
import { AppProvider, AppLayout, APIProvider } from '@layouts'

import '@styles/base.styl'
import '@styles/abstraction.styl'

render(
    <AppProvider>
        <APIProvider>
            <AppLayout>
                <Landing />
            </AppLayout>
        </APIProvider>
    </AppProvider>,
    document.getElementById('root')
)
