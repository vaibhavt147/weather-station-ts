import { IObserver } from "./IObserver";

export class WebDisplay implements IObserver {
  update(temp: number): void {
    console.log(`Web Display: Updated temperature to ${temp}°C`);
  }
}
