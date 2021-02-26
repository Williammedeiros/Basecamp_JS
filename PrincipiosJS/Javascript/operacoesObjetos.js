var person = {
    name: 'Daniel Peter',
    height: 1.78,
}

var any = {
    age:15
}

var newObject = Object.assign(person, any)

person = Object.assign(person, any)

//Object.freeze(person)

//person.age = 12

//person.name = 'William'

//console.log(person)
console.log(newObject)

console.log(person)