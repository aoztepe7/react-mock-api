export enum enmLocationType {
    Undefined = 0, Country = 1, City = 2, Town = 3, Village = 4, Airport = 5
}
export enum enmProvider {
    Undefined = 0,
    //[ProviderEnum(1000)]
    TourVisio = 1,
    //[ProviderEnum("PXM", 2)]
    Paximum = 2,
    //[ProviderEnum("SFL", 1)]
    SanFlight = 3,
    SanTSG = 4,
    HipTrips = 6,
    BaseProvider = 7,
    //[ProviderEnum("ELV", 3)]
    Elvia = 8,
    /// <summary>
    /// UIC - United Insurance Company
    /// </summary>
    Uic = 12,
    Pobeda = 10,
    Kaera = 11,
    //[ProviderEnum("SFL", 1)]
    SanFlightV2 = 13,
    /// <summary>
    /// SanFlight & SanFlightV2
    /// </summary>
    SanFlightProxy = 14,
    Antur = 15,
    His = 16,
    Fibula = 17,
    Cets = 18,
    Obilet = 19,

    //#region Payment Providers

    Iyzico = 1000,
    NestPay = 1001,
    DPay = 1002,
    AnturCRM = 1003,
    Mellat = 1004,
    MIGS = 1005,
    EST = 1006,
    Garanti = 1008,
    DenizBank = 1009,
    YapiKredi = 1010,
    AlfaBank = 1011,
    Mollie = 1012,
    AntePAY = 1013,
    AllSecure = 1014,
    Saferpay = 1016,
    SberBank = 1017,
    Klarna = 1018,
    FinansBank = 1019,
    NovaPay = 1020,
    Revo = 1021,
    Bankart = 1022,
    SafeCharge = 1023,
    Borica = 1024,
    PayTabs = 1025,
    Aaib = 1026,
    Stripe = 1027,
    PayTabs2 = 1028,
    CibBank = 1029,
    VubBank = 1030,
    VakifBank = 1031,
    Moneta = 1032,
    GiroGate = 1033,
    Param = 1034,
    Monri = 1035,
    Maib = 1036,
    NGenius = 1037
    //#endregion

}

export class mdlLocation {
    id: string;
    code?: string;
    internationalCode?: string;
    name?: string;
    internationalName?: string;
    type: enmLocationType;
    latitude?: string;
    longitude?: string;
    parentId?: string;
    countryId?: string;
    countryName?: string;
    cityId?: string;
    cityName?: string;
    isProductLocation?: boolean;
    provider?: enmProvider;
    isTopRegion?: boolean;
    displayOrder?: number;
    constructor(pId: string, pType: enmLocationType) {
        this.id = pId;
        this.type = pType;
    }
}