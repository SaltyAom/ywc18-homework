import { h } from 'preact'

import { Search as SearchIcon } from '@icons'

import './search-bar.styl'

const SearchBar = () => {
    const placeholder =
        'ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป'

    return (
        <form id="search-bar">
            <input
                class="input"
                type="search"
                name="Search"
                placeholder={placeholder}
                autoComplete="off"
                // @ts-ignore
                enterKeyHint="search"
            />
            <button class="action" type="submit">
                <SearchIcon />
            </button>
        </form>
    )
}

export default SearchBar