export abstract class Accommodation  {
    constructor(
        public id: string,
        public address: string,
        public name: string,
        public pricePerNight: number
    ){}

    abstract calculatePrice(days: number): number;
}