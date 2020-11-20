import { Fragment, h } from 'preact'

import { useStoreon } from 'storeon/preact'
import { APIEvent, APIStore } from '@stores/api'
import { SelectionStore, SelectionEvent } from '@stores/selection'

import Card from '@app/components/abstraction/card'

const Landing = () => {
    let { merchants, provinces, categories } = useStoreon<APIStore, APIEvent>(
            'merchants',
            'provinces',
            'categories'
        ),
        {
            categorySelection,
            subCategorySelection,
            priceSelection,
            provinceSelection,
            search
        } = useStoreon<SelectionStore, SelectionEvent>(
            'categorySelection',
            'subCategorySelection',
            'priceSelection',
            'provinceSelection',
            'search'
        )

    return (
        <Fragment>
            {merchants
                .filter(({ categoryName }) =>
                    categorySelection >= 0
                        ? categories[categorySelection]?.name.includes(
                              categoryName
                          )
                        : true
                )
                .filter(({ subcategoryName }) =>
                    categorySelection >= 0 && subCategorySelection >= 0
                        ? subcategoryName ===
                          categories[categorySelection]?.subcategories[
                              subCategorySelection
                          ]
                        : true
                )
                .filter(({ addressProvinceName }) =>
                    provinceSelection === 0
                        ? true
                        : addressProvinceName ===
                          provinces[provinceSelection - 1]
                )
                .filter(({ priceLevel }) =>
                    priceSelection === 0 ? true : priceSelection === priceLevel
                )
                .filter(({ shopNameTH }) =>
                    shopNameTH.toLocaleLowerCase().includes(search)
                )
                .map((merchant) => (
                    <Card key={merchant.shopNameTH} merchant={merchant} />
                ))}
        </Fragment>
    )
}

export default Landing
