import { Action } from '@ngrx/store'
import { CatalogItem } from '../../models/catalog.model'

export const ADD_CATALOG = '[CATALOG] Add'
export const REMOVE_CATALOG = '[CATALOG] Remove'

export class AddCatalog implements Action {
    readonly type = ADD_CATALOG

    constructor(public payload: CatalogItem) {}
}

export class RemoveCatalog implements Action {
    readonly type = REMOVE_CATALOG

    constructor(public payload: string) {}
}

export type Actions = AddCatalog | RemoveCatalog