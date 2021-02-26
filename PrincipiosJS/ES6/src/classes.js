class Car {
    //constructor(brand, price) 
    constructor(brand, price = 12) {
        this.brand = brand
        this.price = price

    }

    run() {
        console.log('Velocidade')
    }
}

const Mustang = new Car('Ford')
Mustang.run()

console.log(Mustang.price)