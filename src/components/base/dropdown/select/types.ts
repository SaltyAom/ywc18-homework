import { FunctionComponent } from 'preact'

export interface DropDownSelectProps {
    option: string
    onSelect: (value: string) => void
}

export type DropDownSelectComponent = FunctionComponent<DropDownSelectProps>
