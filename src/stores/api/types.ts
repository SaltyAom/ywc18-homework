import { API as APIModel } from '@models'

import APIAction from './constant'

export interface APIStore extends APIModel {
	isLoading: boolean
}

export interface APIEvent {
	[APIAction.UPDATE]: APIModel
	[APIAction.LOADING]: boolean
}