import { FunctionComponent } from 'preact'

export interface ChoiceGroupProps {
    choices: string[]
    active: number
    onSelect: (value: number) => void
}

export type ChoiceGroupComponent = FunctionComponent<ChoiceGroupProps>