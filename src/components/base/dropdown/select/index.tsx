import { h } from 'preact'

import { DropDownSelectComponent } from './types'

const Select: DropDownSelectComponent = ({ onSelect, option, index }) => {
    let select = () => {
        onSelect(index)
    }

    return (
        <button onClick={select} class="option">
            {option}
        </button>
    )
}

export default Select