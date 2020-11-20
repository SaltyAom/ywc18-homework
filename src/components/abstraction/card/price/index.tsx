import { h, Fragment } from 'preact'

import { PriceComponent } from './types'

const Price: PriceComponent = ({ price }) => {
    let maxPrice = 4

    return (
        <Fragment>
            <span class="bold ">
                {new Array(price).fill(0).map(() => "฿")}
            </span>
            {new Array(maxPrice - price).fill(0).map(() => "฿")}
        </Fragment>
    )
}

export default Price