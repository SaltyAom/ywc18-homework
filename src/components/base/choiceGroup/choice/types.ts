import { FunctionComponent } from 'preact'

export interface ChoiceProps {
    value: string
    onSelect: (value: string) => void
    active?: boolean
}

export type ChoiceComponent = FunctionComponent<ChoiceProps>