import { h } from 'preact'

import { useStoreon } from 'storeon/preact'
import { SelectionAction, SelectionEvent, SelectionStore } from '@stores/selection'

import { LocationDropDown } from '@components/abstraction'
import SearchBar from './searchBar'

import { FilterIcon } from '@app/icons'

import './app-bar.styl'

const AppBar = () => {
    let { dispatch, isFilterOpen } = useStoreon<SelectionStore, SelectionEvent>(
        'isFilterOpen'
    )

    let toggleFilter = () => {
        dispatch(SelectionAction.FILTER, !isFilterOpen)
    }

    return (
        <header id="app-bar">
            <LocationDropDown className="-app-bar" />
            <SearchBar />
            <button class="filter" onClick={toggleFilter}>
                <FilterIcon />
            </button>
        </header>
    )
}

export default AppBar
