import { IAccommodation } from "../interfaces/accommodation";

export class Booking{
    public basePrice: number;
    public totalPrice: number;

    constructor(
        public accommodation: IAccommodation,
        public days: number,
    ){
        this.basePrice = accommodation.calculatePrice(this.days)
        this.totalPrice = this.basePrice
    }

    updatePrice(finalPrice: number){
        this.totalPrice = finalPrice;
    }
}