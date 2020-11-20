import { FunctionComponent } from 'preact'

import { Merchant } from '@models'

export type CardProps = {
    merchant: Merchant
}

export type CardComponent = FunctionComponent<CardProps>
