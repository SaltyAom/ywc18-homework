import { FunctionComponent, VNode } from 'preact'

export interface DropDownProps {
    name: string
    className?: string
    Icon?: VNode
    value: string[]
    onSelect: (index: number) => void
    active: number
}

export type DropDownComponent = FunctionComponent<DropDownProps>
