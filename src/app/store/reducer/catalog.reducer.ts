import { CatalogItem } from '../../models/catalog.model'
import * as CatalogActions from '../actions/catalog.action'

const initialState: CatalogItem[] = [
    {
        thumbnail: 'thumbnail_1.jpg',
        name: 'Buku Mewarnai Looney Tunes',
        author: 'Warner Bross',
        price: 10000,
    },
    {
        thumbnail: 'thumbnail_2.jpg',
        name: 'Buku Pintar Mengurus Surat Kendaraan Bermotor',
        author: 'Bernadius',
        price: 25000
    },
    {
        thumbnail: 'thumbnail_3.jpg',
        name: 'Buku Aktivitas Kendaraan Udara',
        author: 'Arum Faiza',
        price: 25000
    },
    {
        thumbnail: 'thumbnail_4.jpg',
        name: 'Berkelana Lewat Buku',
        author: 'Murti Bunanta',
        price: 29750
    },
    {
        thumbnail: 'thumbnail_5.jpg',
        name: 'Baca Buku Ini Saat Engkau Ingin Menikah',
        author: 'Anna Mutmainah',
        price: 30000
    },
    {
        thumbnail: 'thumbnail_6.jpg',
        name: 'Buku Pintar Monetisasi Youtube',
        author: 'Anna Mutmainah',
        price: 85000
    },
    {
        thumbnail: 'thumbnail_7.jpg',
        name: 'Novel Grafis Hujan Bulan Juni',
        author: 'Sapardi Djoko',
        price: 66000
    },
    {
        thumbnail: 'thumbnail_8.jpg',
        name: 'Hbiki - Kiat Menjadi Novelis',
        author: 'Mitsuharu',
        price: 28900
    },
    {
        thumbnail: 'thumbnail_9.jpg',
        name: 'Setanggi Kopi Petualang',
        author: 'Emui Alif',
        price: 102000
    },
    {
        thumbnail: 'thumbnail_10.jpg',
        name: 'Light Novel Detektif Conan: Private Eyes',
        author: 'Aoyama Gosho',
        price: 51000
    },
]

export function CatalogReducer(state: CatalogItem[] = initialState, action: any) {
    switch (action.type) {
        case CatalogActions.ADD_CATALOG:
            return [...state, action.payload]
        case CatalogActions.REMOVE_CATALOG:
            return [...state, action.payload]
        default:
            return state
    }
}