import { VNode } from 'preact'
import { useEffect } from 'preact/hooks'

import { useStoreon } from 'storeon/preact'
import { APIEvent, APIStore, APIAction } from '@stores/api'

import { API } from '@models'

const APIProvider = ({ children }: { children: VNode }) => {
    let { dispatch } = useStoreon<APIStore, APIEvent>()

    useEffect(() => {
        fetch('https://panjs.com/ywc18.json')
            .then((res) => res.json())
            .then((data: API) => {
                dispatch(APIAction.UPDATE, data)
            })
            .finally(() => {
                dispatch(APIAction.LOADING, false)
            })
    }, [])

    return children
}

export default APIProvider
