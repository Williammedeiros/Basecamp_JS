// rest e spread

const numbers = [1, 2, 3, 4, 5, 6]

const [first, ...rest] = numbers

console.log(rest)


const person = {
    name: 'Will',
    age: 34,
    height: 1.78,
    car: 'Mustang'
}


const {name, ...rest} = person

console.log (name)


const sum = (...params) => {
    return params.reduce((total,next) => total + next)
}

console.log(sum(10, 30, 20, 10))


const cars1 = ['Mustang', 'Ferrari', 'Mclaren']
const cars2 = ['BMW', 'Alfa Romeo', 'Camaro']

const cars = [...cars1, ...cars2]

console.log(cars)

const person = {
    name: 'Dani',
    age: 10,
    height: 1.78,
    car: 'Lotus'
}

const person1 = {
    ...person,
    car: 'Williams'
}

console.log(person)

