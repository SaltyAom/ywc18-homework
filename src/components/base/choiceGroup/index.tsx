import { h } from 'preact'
import { useState } from 'preact/hooks'

import Choice from './choice'

import { ChoiceGroupComponent } from './types'

import './choice-group.styl'

const ChoiceGroup: ChoiceGroupComponent = ({ choices = [], onSelect }) => {
    let [selected, updateSelected] = useState('')

    let handleSelect = (value: string) => {
        if (value === selected) return

        updateSelected(value)
        onSelect(value)
    }

    return (
        <section class="choice-group">
            {choices.map((choice) => (
                <Choice
                    key={choice}
                    value={choice}
                    onSelect={handleSelect}
                    active={selected === choice}
                />
            ))}
        </section>
    )
}

export default ChoiceGroup
