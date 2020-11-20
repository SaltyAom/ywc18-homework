import { FunctionComponent } from "preact"

export interface PriceProps {
    price: 0 | 1 | 2 | 3 | 4
}

export type PriceComponent = FunctionComponent<PriceProps>