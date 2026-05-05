import { IFee } from "../interfaces/fee";

export class PricingService {
  constructor(private fees: IFee[]) {}

  calculateTotal(basePrice: number): number {
    const totalFees = this.fees.reduce(
      (acc, fee) => acc + fee.calculate(basePrice), 
      0
    );
    return basePrice + totalFees;
  }
}