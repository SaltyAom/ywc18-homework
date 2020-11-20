import { h } from 'preact'

import { LocationDropDown } from '@components/abstraction'
import SearchBar from './searchBar'

import './app-bar.styl'

const AppBar = () => {
    return (
        <header id="app-bar">
            <LocationDropDown className="-app-bar" />
            <SearchBar />
        </header>
    )
}

export default AppBar
