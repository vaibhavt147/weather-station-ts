import { PhoneDisplay } from "./PhoneDisplay";
import { WeatherStation } from "./WeatherStation";
import { WebDisplay } from "./WebDisplay";

const weatherStation = new WeatherStation();
const phone = new PhoneDisplay();
const web = new WebDisplay();

weatherStation.attach(phone);
weatherStation.attach(web);

weatherStation.setTemperature(25);
weatherStation.setTemperature(50);
