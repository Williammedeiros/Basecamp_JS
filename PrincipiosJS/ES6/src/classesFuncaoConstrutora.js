function Car(brand, price) {
    this.brand = brand
    this.price = price
    //console.log(this)
}

const Mustang = new Car('Ford', 10)
const Camaro = new Car('Checrolet', 11)

console.log(Mustang)
console.log(Camaro)