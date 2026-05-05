import { Apartment } from "../domain/entities/apartment";
import { House } from "../domain/entities/house";
import { SharedRoom } from "../domain/entities/shared-room";
import { IAccommodation } from "../domain/interfaces/accommodation";
import { IAccommodationRepository } from "../domain/interfaces/accommodation-repository";

export class MemoryAccommodationRepository implements IAccommodationRepository {
  private items: IAccommodation[] = [];

  constructor() {
    this.items.push(new House("0", "Endereco 1", "Casa 1", 340));
    this.items.push(new Apartment("1", "Endereco 2", "Apartamento 1", 120));
    this.items.push(new SharedRoom("2", "Endereco 3", "Shared room 1", 80));
  }

  findById(id: string): IAccommodation {
    const accommodation = this.items.find(item => item.id === id);
    if (!accommodation) throw new Error("Not find accommodation");
    
    return accommodation;
  }
}