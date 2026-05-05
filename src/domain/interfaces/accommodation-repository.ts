import { IAccommodation } from "./accommodation";

export interface IAccommodationRepository {
  findById(id: string): IAccommodation;
}