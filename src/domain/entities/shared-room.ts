import { IAccommodation } from "../interfaces/accommodation";
import { Accommodation } from "./accommodation";

export class SharedRoom extends Accommodation {
     calculatePrice(days: number): number {
        return this.pricePerNight * days;
    }
} 