import { IObserver } from "../src/IObserver";
import { WeatherStation } from "../src/WeatherStation";

class MockObserver implements IObserver {
  public lastTemp: number = 0;

  update(temp: number): void {
    this.lastTemp = temp;
  }
}

describe("WeatherStation Observer Pattern", () => {
  let station: WeatherStation;
  let observer1: MockObserver;
  let observer2: MockObserver;

  beforeEach(() => {
    station = new WeatherStation();
    observer1 = new MockObserver();
    observer2 = new MockObserver();
  });

  test("observers should receive updated temperature", () => {
    station.attach(observer1);
    station.attach(observer2);

    station.setTemperature(22);

    expect(observer1.lastTemp).toBe(22);
    expect(observer2.lastTemp).toBe(22);
  });

  test("detached observer should not receive updates", () => {
    station.attach(observer1);
    station.attach(observer2);
    station.detach(observer2);

    station.setTemperature(18);

    expect(observer1.lastTemp).toBe(18);
    expect(observer2.lastTemp).toBe(0); // default value
  });
});
