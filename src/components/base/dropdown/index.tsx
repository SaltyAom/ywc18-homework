import { h } from 'preact'
import { useReducer } from 'preact/hooks'

import DropDownSelect from './select'

import { ExpandIcon } from '@icons'

import { DropDownComponent } from './types'

import './dropdown.styl'

const DropDown: DropDownComponent = ({
    name,
    className = '',
    Icon = null,
    value = [],
    onSelect = () => null,
    children
}) => {
    let [isOpen, toggleOpen] = useReducer((state) => !state, false)

    return (
        <button
            class={`dropdown ${className}`}
            onClick={toggleOpen}
            tabIndex={isOpen ? -1 : 1}
        >
            <p class="title" for={name}>
                {Icon}
                <span>
                    {children}
                </span>
            </p>
            <ExpandIcon />
            <div class={`select ${isOpen ? '-open' : ''}`}>
                {value.map((option) => (
                    <DropDownSelect
                        key={value}
                        option={option}
                        onSelect={onSelect}
                    />
                ))}
            </div>
        </button>
    )
}

export type { DropDownComponent, DropDownProps } from './types'
export default DropDown
