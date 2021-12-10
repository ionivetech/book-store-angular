import { Action } from '@ngrx/store'
import { cartItem } from '../../models/cart.model'

export const ADD_CART = '[CART] Add'
export const REMOVE_CART = '[CART] Remove'

export class AddCart implements Action {
    readonly type = ADD_CART

    constructor(public payload: cartItem) {}
}

export class RemoveCart implements Action {
    readonly type = REMOVE_CART

    constructor(public payload: number) {}
}

export type Actions = AddCart | RemoveCart