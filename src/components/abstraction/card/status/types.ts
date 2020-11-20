import { FunctionComponent } from "preact"

export interface StatusProps {
    isOpen: boolean
}

export type StatusComponent = FunctionComponent<StatusProps>