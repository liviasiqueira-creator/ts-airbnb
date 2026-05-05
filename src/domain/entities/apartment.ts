import { IAccommodation } from "../interfaces/accommodation";
import { Accommodation } from "./accommodation";
import { ServiceFee } from "./service-fee";

export class Apartment extends Accommodation {
    private serviceFee = new ServiceFee(350);
    
    calculatePrice(days: number): number {
        return (this.pricePerNight * days) + this.serviceFee.calculate();
    }
}