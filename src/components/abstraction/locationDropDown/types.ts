import { FunctionComponent } from 'preact'

import { DropDownProps } from '@components/base/dropdown'

export interface LocationDropDownProps extends Omit<DropDownProps, "name" | "value" | "onSelect"> {

}

export type LocationDropDownComponent = FunctionComponent<LocationDropDownProps>