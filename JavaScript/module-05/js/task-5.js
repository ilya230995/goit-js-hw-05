class Car {
  static getSpecs(car) {
    console.log(car);
  }

  constructor({ speed, price, maxSpeed, isOn, distance }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
  }

  get price() {
    return this._price;
  }
  set price(price) {
    this._price = price;
  }

  turnOn() {
    if (this.isOn === false) {
      this.isOn = true;
    }
  }

  turnOff() {
    if (this.isOn === true) {
      this.isOn = false;
      this.speed = 0;
    }
  }

  accelerate(value) {
    if (value < this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (value > 0) {
      this.speed -= value;
    }
  }

  drive(hours) {
    if (this.isOn === true) {
      this.distance = this.distance + hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
