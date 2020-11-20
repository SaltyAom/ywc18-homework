import { FunctionComponent, VNode } from 'preact'

export interface DropDownProps {
    name: string
    className?: string
    Icon?: VNode
    value: string[]
    onSelect: (value: string) => void
}

export type DropDownComponent = FunctionComponent<DropDownProps>
