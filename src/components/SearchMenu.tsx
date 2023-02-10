import React from "react";
import GetLocationsResponse from "../models/GetLocationsResponse";
import GetNightsResponse from "../models/GetNightsResponse";
import { mdlLocation } from "../models/Location";
import { enmDataType, GetFakeResponse } from "../service/MockService";

export const SearchMenu = (props: any) => {

    const [locations, setLocations] = React.useState<mdlLocation[]>([]);
    const [nights, setNights] = React.useState<number[]>([]);

    React.useEffect(() => {
        var locationsData = GetFakeResponse(GetLocationsResponse);
        setLocations(locationsData.body.locations!);

        var nightsData = GetFakeResponse(GetNightsResponse);
        setNights(nightsData.body.nights!);
    }, []);


    return (
        <div>
            <h2>Locations </h2>
            <ul>
                {locations.map((loc, index) =>
                    <li key={index}> {loc.name} </li>
                )}
            </ul>

            <h2>Nights </h2>
            <ul>
                {nights.map((night, index) =>
                    <li key={index}> {night} </li>
                )}
            </ul>
        </div>
    )
}