import { IObserver } from "./IObserver";

export class PhoneDisplay implements IObserver {
  update(temp: number): void {
    console.log(`PhoneDisplay: Updated temperature to ${temp}°C`);
  }
}
