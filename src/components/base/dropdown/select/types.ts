import { FunctionComponent } from 'preact'

export interface DropDownSelectProps {
    option: string
    index: number
    onSelect: (index: number) => void
}

export type DropDownSelectComponent = FunctionComponent<DropDownSelectProps>
