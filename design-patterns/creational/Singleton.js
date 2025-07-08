/*Singleton — это порождающий паттерн проектирования, который гарантирует, что у класса есть только один экземпляр
, и предоставляет к нему глобальную точку доступа. */
class AppConfig {
  constructor() {
    if (AppConfig.instance) {
      return AppConfig.instance; // возвращаем уже созданный экземпляр
    }

    this.config = {
      theme: 'dark',
      language: 'en',
    };

    AppConfig.instance = this; // сохраняем экземпляр
  }
  get(key) {
    return this.config[key];
  }
  set(key, value) {
    this.config[key] = value;
  }
}

// Использование
const config1 = new AppConfig();
const config2 = new AppConfig();

console.log(config1 === config2); // true — один и тот же объект
