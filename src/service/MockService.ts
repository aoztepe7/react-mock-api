import { Locations, Nights } from "../mocks/MockData";
import { ServiceResponse } from "../mocks/MockResponse";
import GetLocationsResponse from "../models/GetLocationsResponse";
import GetNightsResponse from "../models/GetNightsResponse";


export enum enmDataType {
    GetArrivalAutoComplete,
    GetArrivals,
    GetDepartures,
    GetLocations,
    GetNights,
    PriceSearch
}


export function GetFakeResponse<T>(x: T, isSuccess: boolean = true): any {
    switch (x) {
        case GetLocationsResponse:
            return GetLocations(isSuccess);
        case GetNightsResponse:
            return GetNights(isSuccess);

    }
}

const GetLocations = (isSuccess: boolean) => {
    var response = new ServiceResponse<GetLocationsResponse>(isSuccess);
    response.body = new GetLocationsResponse();
    response.body!.locations = Locations;
    return response;
}

const GetNights = (isSuccess: boolean) => {
    var response = new ServiceResponse<GetNightsResponse>(isSuccess);
    response.body = new GetNightsResponse(Nights);
    return response;
}