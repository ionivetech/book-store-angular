import { cartItem } from '../../models/cart.model'
import * as CartActions from '../actions/cart.action'

export function CartReducer(state: cartItem[] = [], action: any) {
    switch (action.type) {
        case CartActions.ADD_CART:
            return [...state, action.payload]
        case CartActions.REMOVE_CART:
            const array = [...state];
            array.splice(action.payload, 1)
            return array
        default:
            return state
    }
}