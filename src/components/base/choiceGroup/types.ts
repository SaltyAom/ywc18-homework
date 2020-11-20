import { FunctionComponent } from 'preact'

export interface ChoiceGroupProps {
    choices: string[]
    onSelect: (value: string) => void
}

export type ChoiceGroupComponent = FunctionComponent<ChoiceGroupProps>