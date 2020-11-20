import { h } from 'preact'

import { StatusComponent } from './types'

const Status: StatusComponent = ({ isOpen }) => 
    isOpen ? (
        <p class="status -open">เปิดอยู่</p>
    ) : (
        <p class="status">ปิดอยู่</p>
    )

export default Status