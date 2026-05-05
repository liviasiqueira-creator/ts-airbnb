import { IFee } from "../interfaces/fee";

export class ServiceFee implements IFee {
  constructor(private fixedValue: number) {}
  
  calculate(amount?: number): number {
    return this.fixedValue;
  }
}