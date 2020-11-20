import { h } from 'preact'

import { DropDown } from '@components/base'

import { LocationIcon } from '@icons'

import { LocationDropDownComponent } from './types'

const LocationDropDown: LocationDropDownComponent = (props) => {
    let { Icon, ...rest } = props

    let value = ['พื้นที่ใกล้ฉัน', 'กรุงเทพ']

    let onSelect = (value: string) => {
        console.log(value)
    }

    return (
        <DropDown name="Location" value={value} onSelect={onSelect} Icon={<LocationIcon />} {...rest}>
            พื้นที่ใกล้ฉัน
        </DropDown>
    )
}

export default LocationDropDown
