import { FunctionComponent } from 'preact'

export interface ChoiceProps {
    value: string
    onSelect: (value: number) => void
    active?: boolean
    index: number
}

export type ChoiceComponent = FunctionComponent<ChoiceProps>