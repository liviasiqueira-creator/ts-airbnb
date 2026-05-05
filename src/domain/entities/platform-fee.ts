import { IFee } from "../interfaces/fee";

export class PlatformFee implements IFee {
  calculate(amount: number): number {
    return amount * 0.0585;
  }
}