import { h } from 'preact'

import { ChoiceComponent } from './types'

import './choice.styl'

const Choice: ChoiceComponent = ({ value, onSelect, active = false, index }) => {
    let select = () => {
        onSelect(index)
    }

    return (
        <button class={`choice ${active ? '-active' : ''}`} onClick={select}>
            <div class="radio">
                <div class="activation" />
            </div>
            <p class="value">{value}</p>
        </button>
    )
}

export default Choice
