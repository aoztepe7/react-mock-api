import moment from 'moment';
import { mdlLocation } from '../models/Location';

export const Locations: mdlLocation[] = [
    {
        "code": "GRC",
        "internationalCode": "GRC",
        "name": "GREECE",
        "type": 1,
        "latitude": "38.790873400",
        "longitude": "22.280909700",
        "parentId": "1",
        "countryId": "1",
        "provider": 0,
        "isTopRegion": false,
        "id": "1"
    },
    {
        "code": "SKG",
        "name": "THESSALONIKI",
        "type": 2,
        "latitude": "40.621252400",
        "longitude": "22.911007900",
        "parentId": "1",
        "countryId": "1",
        "provider": 0,
        "isTopRegion": false,
        "id": "2"
    },
    {
        "code": "PXMCNT01",
        "name": "Paximum Country",
        "type": 1,
        "parentId": "5",
        "countryId": "5",
        "provider": 0,
        "isTopRegion": false,
        "id": "5"
    },
    {
        "code": "PXMCTY01",
        "name": "Paximum City",
        "type": 2,
        "parentId": "5",
        "countryId": "5",
        "provider": 0,
        "isTopRegion": false,
        "id": "6"
    },
    {
        "code": "ATH",
        "name": "ATHENS",
        "type": 2,
        "latitude": "37.936358000",
        "longitude": "23.944467000",
        "parentId": "1",
        "countryId": "1",
        "provider": 0,
        "isTopRegion": false,
        "id": "7"
    },
    {
        "code": "TR",
        "internationalCode": "TUR",
        "name": "TURKEY",
        "type": 1,
        "parentId": "8",
        "countryId": "8",
        "provider": 0,
        "isTopRegion": false,
        "id": "8"
    },
    {
        "code": "AYT",
        "name": "ANTALYA",
        "type": 2,
        "latitude": "36.875360000",
        "longitude": "30.708380000",
        "parentId": "8",
        "countryId": "8",
        "provider": 0,
        "isTopRegion": false,
        "id": "9"
    },
    {
        "code": "ANT",
        "name": "ANTALYA CITY CENTER",
        "type": 3,
        "parentId": "9",
        "countryId": "8",
        "provider": 0,
        "isTopRegion": false,
        "id": "10"
    },
    {
        "code": "KEM",
        "name": "KEMER",
        "type": 3,
        "latitude": "36.605050000",
        "longitude": "30.560290000",
        "parentId": "9",
        "countryId": "8",
        "provider": 0,
        "isTopRegion": false,
        "id": "11"
    },
    {
        "code": "BLK",
        "name": "BELEK",
        "type": 3,
        "latitude": "36.851600000",
        "longitude": "31.060300000",
        "parentId": "9",
        "countryId": "8",
        "provider": 0,
        "isTopRegion": false,
        "id": "12"
    },
    {
        "code": "SIDE",
        "name": "SIDE",
        "type": 3,
        "latitude": "36.781260000",
        "longitude": "31.387510000",
        "parentId": "9",
        "countryId": "8",
        "provider": 0,
        "isTopRegion": false,
        "id": "13"
    },
    {
        "code": "ALY",
        "name": "ALANYA",
        "type": 3,
        "latitude": "36.544950000",
        "longitude": "31.993020000",
        "parentId": "9",
        "countryId": "8",
        "provider": 0,
        "isTopRegion": false,
        "id": "14"
    }]

export const Nights: Array<number> = [
    1, 2, 3, 4, 5, 6, 7
]
