import { h, FunctionComponent } from "preact"

const IconBase: FunctionComponent = ({ children }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        class="icon"
        fill="currentColor"
    >
        {children}
    </svg>
)

export default IconBase