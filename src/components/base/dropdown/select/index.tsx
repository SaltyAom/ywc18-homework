import { h } from 'preact'

import { DropDownSelectComponent } from './types'

const Select: DropDownSelectComponent = ({ onSelect, option }) => {
    let select = () => {
        onSelect(option)
    }

    return (
        <button onClick={select} class="option">
            {option}
        </button>
    )
}

export default Select