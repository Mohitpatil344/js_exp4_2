class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo = () => {
        return "This car is a ${this.brand} ${this.model} from ${this.year}.";
    }

    static getAllCars(car) {
        return "Car: ${car.brand} ${car.model}";
    }
}


const car = new Car('Honda', 'Accord', 2020);
console.log(car.getInfo());


const cars = 
    new Car('BMW', 'X5', 2022) ;
    


console.log(car.getInfo());

console.log(Car.getAllCars(cars));
