import { h } from 'preact'
import { useRef } from 'preact/hooks'

import { useStoreon } from 'storeon/preact'
import {
    SelectionAction,
    SelectionStore,
    SelectionEvent
} from '@stores/selection'

import { SearchIcon } from '@icons'

import './search-bar.styl'

const placeholder =
    'ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป'

const SearchBar = () => {
    let { dispatch } = useStoreon<SelectionStore, SelectionEvent>(),
        ref = useRef<HTMLInputElement>()

    let handleSearch = () => dispatch(SelectionAction.SEARCH, ref.current.value)

    return (
        <form id="search-bar">
            <input
                ref={ref}
                class="input"
                type="search"
                name="Search"
                placeholder={placeholder}
                autoComplete="off"
                // @ts-ignore
                enterKeyHint="search"
                onInput={handleSearch}
            />
            <button class="action" type="submit">
                <SearchIcon />
            </button>
        </form>
    )
}

export default SearchBar
