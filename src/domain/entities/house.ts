import { Accommodation } from "./accommodation";
import { CleaningFee } from "./cleaning-fee";

export class House extends Accommodation {
    private cleaningFee = new CleaningFee(150);
   
    calculatePrice(days: number): number {
        return (this.pricePerNight * days) + this.cleaningFee.calculate();
    }
}