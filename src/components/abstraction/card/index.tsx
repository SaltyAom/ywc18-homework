import { h } from 'preact'

import Status from './status'
import Price from './price'
import Chip from './chip'

import { CarIcon, PetIcon, CreateIcon } from '@icons'

import { CardComponent } from './types'

import './card.styl'

const iconMap = {
    ที่จอดรถ: <CarIcon />,
    สามารถนำสัตว์เลี้ยงเข้าได้: <PetIcon />,
    รับจองล่วงหน้า: <CreateIcon />
}

const Card: CardComponent = ({
    merchant: {
        isOpen,
        facilities,
        shopNameTH,
        subcategoryName,
        highlightText,
        recommendedItems,
        coverImageId,
        priceLevel,
        addressDistrictName,
        addressProvinceName
    }
}) => (
    <section class="card">
        <figure class="figure">
            <img class="image" src={coverImageId} />
        </figure>
        <section class="content">
            <header class="header">
                <div class="row -title">
                    <h5 class="title">{shopNameTH}</h5>
                    <Status isOpen={isOpen === 'Y'} />
                </div>
                <div class="row">
                    <p class="detail">
                        {subcategoryName} | <Price price={priceLevel} /> |{' '}
                        {addressProvinceName} {addressDistrictName}
                    </p>
                </div>
            </header>
            <section class="detail">
                <div class="row">
                    <p class="detail">
                        {highlightText
                            .split(/<[/|]?strong>/)
                            .map((text, index) =>
                                index % 2 !== 0 ? (
                                    <span class="bold">{text}</span>
                                ) : (
                                    text
                                )
                            )}
                    </p>
                </div>
                <div class="row">
                    <p class="detail">
                        <span class="bold">เมนูแนะนำ: </span>
                        {recommendedItems?.map((item) => item)}
                    </p>
                </div>
                <div class="row">
                    {facilities.map((facility) => (
                        // @ts-ignore
                        <Chip>{iconMap[facility]}</Chip>
                    ))}
                </div>
            </section>
        </section>
    </section>
)

export default Card
