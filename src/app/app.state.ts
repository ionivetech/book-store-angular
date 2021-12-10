import { cartItem } from "./models/cart.model";
import { CatalogItem } from "./models/catalog.model";

export interface AppState {
    readonly catalog: CatalogItem[]
    readonly cart: cartItem[]
}