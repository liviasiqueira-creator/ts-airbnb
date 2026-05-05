import { Booking } from "../../domain/entities/booking";
import { IAccommodationRepository } from "../../domain/interfaces/accommodation-repository";
import { PricingService } from "../../domain/services/pricing-service";


export class CreateBooking {
  constructor(
    private readonly accommodationRepository: IAccommodationRepository,
    private readonly pricingService: PricingService
  ) {}

  execute(input: { accommodationId: string, days: number }): Booking {
    const accommodation = this.accommodationRepository.findById(input.accommodationId);
    const booking = new Booking(accommodation, input.days);

    const finalPrice = this.pricingService.calculateTotal(booking.basePrice);
    booking.updatePrice(finalPrice);

    return booking;
  }
}