import { CreateBooking } from "./aplication/usecases/create-booking";
import { PlatformFee } from "./domain/entities/platform-fee";
import { PricingService } from "./domain/services/pricing-service";
import { MemoryAccommodationRepository } from "./infra/accommodation-repository";

const repo = new MemoryAccommodationRepository();

const platformFee = new PlatformFee();
const pricingService = new PricingService([platformFee]);

const createBooking = new CreateBooking(repo, pricingService);

console.log("Reserva Casa: ");

const booking = createBooking.execute({
   accommodationId: '0',
   days: 5
});

console.log(`Acomodação: ${booking.accommodation.name}`);
console.log(`Preço Base (Imóvel): R$ ${booking.basePrice.toFixed(2)}`);
console.log(`Preço Total (Com Taxas): R$ ${booking.totalPrice.toFixed(2)}`);

console.log("Reserva Apartamento: ");

const booking2 = createBooking.execute({
   accommodationId: '1',
   days: 2
});

console.log(`Acomodação: ${booking2.accommodation.name}`);
console.log(`Preço Base (Imóvel): R$ ${booking2.basePrice.toFixed(2)}`);
console.log(`Preço Total (Com Taxas): R$ ${booking2.totalPrice.toFixed(2)}`);

console.log("Reserva SharedRoom: ");

const booking3 = createBooking.execute({
   accommodationId: '2',
   days: 1
});

console.log(`Acomodação: ${booking3.accommodation.name}`);
console.log(`Preço Base (Imóvel): R$ ${booking3.basePrice.toFixed(2)}`);
console.log(`Preço Total (Com Taxas): R$ ${booking3.totalPrice.toFixed(2)}`);