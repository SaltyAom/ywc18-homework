import { h } from 'preact'

import Choice from './choice'

import { ChoiceGroupComponent } from './types'

import './choice-group.styl'

const ChoiceGroup: ChoiceGroupComponent = ({
    choices = [],
    active = 0,
    onSelect
}) => {
    let handleSelect = (selected: number) => {
        onSelect(active === selected ? -1 : selected)
    }

    return (
        <section class="choice-group">
            {choices.map((choice, index) => (
                <Choice
                    key={choice}
                    value={choice}
                    onSelect={handleSelect}
                    active={index === active}
                    index={index}
                />
            ))}
        </section>
    )
}

export default ChoiceGroup
