import { IObserver } from "./IObserver";
import { ISubject } from "./ISubject";

export class WeatherStation implements ISubject {
  private observers: IObserver[] = [];
  private temperature: number = 0;

  attach(observer: IObserver): void {
    this.observers.push(observer);
  }

  detach(observer: IObserver): void {
    this.observers = this.observers.filter((o) => o != observer);
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature);
    }
  }

  setTemperature(temp: number): void {
    console.log(`WeatherStation: new temperature is ${temp}°C`);
    this.temperature = temp;
    this.notify();
  }
}
