import { Fragment, h } from 'preact'
import { useReducer, useState } from 'preact/hooks'

import DropDownSelect from './select'

import { ExpandIcon } from '@icons'

import { DropDownComponent } from './types'

import './dropdown.styl'

const DropDown: DropDownComponent = ({
    name,
    className = '',
    Icon = null,
    value = [''],
    onSelect = () => null,
    active = 0
}) => {
    let [isOpen, toggleOpen] = useReducer((state) => !state, false)

    return (
        <Fragment>
            {isOpen && <div id="dropdown-overlay" onClick={toggleOpen} />}
            <button
                class={`dropdown ${className}`}
                onClick={toggleOpen}
                tabIndex={isOpen ? -1 : 1}
            >
                <p class="title" for={name}>
                    {Icon}
                    <span>{value[active]}</span>
                </p>
                <ExpandIcon />
                <div class={`select ${isOpen ? '-open' : ''}`}>
                    {value.map((option, index) => (
                        <DropDownSelect
                            key={value}
                            option={option}
                            index={index}
                            onSelect={onSelect}
                        />
                    ))}
                </div>
            </button>
        </Fragment>
    )
}

export type { DropDownComponent, DropDownProps } from './types'
export default DropDown
