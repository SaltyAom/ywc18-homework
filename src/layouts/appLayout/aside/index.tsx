import { h } from 'preact'

import { DropDown, ChoiceGroup } from '@components/base'
import { LocationDropDown } from '@components/abstraction'

import './aside.styl'

const Aside = () => {
    return (
        <aside id="aside">
            <h4 class="sub-title">ประเภทร้านค้า</h4>
            <ChoiceGroup
                choices={['a', 'b', 'c']}
                onSelect={(e) => console.log(e)}
            />

            <h4 class="sub-title">จังหวัด / ใกล้ฉัน</h4>
            <LocationDropDown />

            <h4 class="sub-title">ราคา</h4>
            <DropDown name="Price" onSelect={() => {}} value={[]}>
                กรุณาเลือก
            </DropDown>

            <h4 class="sub-title">ประเภทอาหารและเครื่องดื่ม</h4>
            <ChoiceGroup
                choices={['a', 'b', 'c']}
                onSelect={(e) => console.log(e)}
            />
        </aside>
    )
}

export default Aside
