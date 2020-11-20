import { Fragment, h } from 'preact'

import './breadcrumb.styl'

const Breadcrumb = () => {
    let paths = ['หน้าแรก', 'ค้นหา']

    return (
        <nav id="breadcrumb">
            {paths.map((path, index) => (
                <Fragment key={path}>
                    <p
                        class={`path ${
                            index < paths.length - 1 ? '-link' : '-current'
                        }`}
                    >
                        {path}
                    </p>
                    {index < paths.length - 1 && <p class="seperator"> / </p>}
                </Fragment>
            ))}
        </nav>
    )
}

export default Breadcrumb
