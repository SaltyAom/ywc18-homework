import { h } from 'preact'

import { useStoreon } from 'storeon/preact'
import { APIEvent, APIStore } from '@stores/api'
import {
    SelectionEvent,
    SelectionStore,
    SelectionAction
} from '@stores/selection'

import { DropDown } from '@components/base'

import { LocationIcon } from '@icons'

import { LocationDropDownComponent } from './types'

const LocationDropDown: LocationDropDownComponent = ({ Icon, ...rest }) => {
    let { provinces } = useStoreon<APIStore, APIEvent>('provinces'),
        { provinceSelection, dispatch } = useStoreon<
            SelectionStore,
            SelectionEvent
        >('provinceSelection')

    let onSelect = (value: number) => {
        dispatch(SelectionAction.PROVINCE, value)
    }

    return (
        <DropDown
            name="Location"
            value={['พื้นที่ใกล้ฉัน', ...provinces]}
            onSelect={onSelect}
            Icon={<LocationIcon />}
            active={provinceSelection}
            {...rest}
        >
            พื้นที่ใกล้ฉัน
        </DropDown>
    )
}

export default LocationDropDown
