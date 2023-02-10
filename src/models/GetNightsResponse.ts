export default class GetNightsResponse {
    nights: Array<number>;
    constructor(nights: Array<number>) {
        this.nights = nights;
    }
}