import { h } from "preact"

import { IconBaseComponent } from './types'

const IconBase: IconBaseComponent = ({ children, outline = false }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        class="icon"
        fill={!outline ? "currentColor" : "transparent"}
        stroke={outline ? "currentColor" : "transparent"}
    >
        {children}
    </svg>
)

export default IconBase