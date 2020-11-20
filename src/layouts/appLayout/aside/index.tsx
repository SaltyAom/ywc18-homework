import { h } from 'preact'

import { useStoreon } from 'storeon/preact'
import { APIEvent, APIStore } from '@stores/api'
import {
    SelectionEvent,
    SelectionStore,
    SelectionAction
} from '@stores/selection'

import { DropDown, ChoiceGroup } from '@components/base'
import { LocationDropDown } from '@components/abstraction'

import './aside.styl'

const Aside = () => {
    let { categories, priceRange } = useStoreon<APIStore, APIEvent>(
            'categories',
            'priceRange'
        ),
        {
            categorySelection,
            subCategorySelection,
            priceSelection,
            isFilterOpen,
            dispatch
        } = useStoreon<SelectionStore, SelectionEvent>(
            'categorySelection',
            'subCategorySelection',
            'priceSelection',
            'isFilterOpen'
        )

    let handleCategory = (selection: number) => {
            dispatch(SelectionAction.CATEGORY, selection)
        },
        handleSubCategory = (selection: number) => {
            dispatch(SelectionAction.SUB_CATEGORY, selection)
        },
        handlePrice = (selection: number) => {
            dispatch(SelectionAction.PRICE, selection)
        }

    return (
        <aside id="aside" class={isFilterOpen ? '-open' : ''}>
            <h4 class="sub-title">ประเภทร้านค้า</h4>
            <ChoiceGroup
                active={categorySelection}
                choices={categories.map((category) => category.name)}
                onSelect={handleCategory}
            />

            <h4 class="sub-title">จังหวัด / ใกล้ฉัน</h4>
            <LocationDropDown />

            <h4 class="sub-title">ราคา</h4>
            <DropDown
                name="Price"
                onSelect={handlePrice}
                value={['กรุณาเลือก', ...priceRange]}
                active={priceSelection}
            />

            <h4 class="sub-title">ประเภทอาหารและเครื่องดื่ม</h4>
            <ChoiceGroup
                active={subCategorySelection}
                choices={categories[categorySelection]?.subcategories || []}
                onSelect={handleSubCategory}
            />
        </aside>
    )
}

export default Aside
