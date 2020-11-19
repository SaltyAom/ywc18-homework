import { h } from 'preact'

import SearchBar from './searchBar'

import './app-bar.styl'

const AppBar = () => {
    return (
        <header id="app-bar">
            <SearchBar />
        </header>
    )
}

export default AppBar
