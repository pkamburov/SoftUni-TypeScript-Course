class MockWeatherDataService {
  private weatherData: string[] = [
    "Sunny 8° to 20°",
    "Partially Cloudy 7° to 19°",
    "Sunny 5° to 18°",
  ];

  addWeatherData(data: string) {
    this.weatherData.push(data);
  }

  @cache()
  getWeatherData() {
    return this.weatherData;
  }
}

function cache() {
  interface Cache {
    lastChecked: Date | undefined;
    data: string[];
  }

  let cache: Cache = {
    lastChecked: undefined,
    data: [],
  };

  return function (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const currentTime = new Date();
      if (
        cache.lastChecked &&
        Math.abs(cache.lastChecked.getTime() - currentTime.getTime()) < 5000
      ) {
        console.log("Returned from cache");
        return cache.data;
      } else {
        const newData = original.apply(this, args);
        cache.data = [...newData];
        cache.lastChecked = new Date();
        return newData;
      }
    };
  };
}

// Input
let service = new MockWeatherDataService();

console.log(service.getWeatherData());
console.log(service.getWeatherData());

service.addWeatherData("Partially Cloudy 5° to 11°");

console.log(service.getWeatherData());

//7 seconds later
setTimeout(() => console.log(service.getWeatherData()), 7000);
