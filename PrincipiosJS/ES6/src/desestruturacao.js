const cars = ['BMW', 'Mustang', 'Porsche', 'Camaro']

const [a, b, c, d, e] = cars

console.log(a, b, c, d, e )


const person = {
    firstName: 'Will',
    secondName: 'Silva',
    age: 33,
    adress: {
        city: 'São Paulo',
        region: 'SP'
    }

}

//const { firstName, secondName, adress: {city}} = person

const showFullName = (person) => {
    console.log(`${person.firstName} ${person.secondName}`)
}

const showFullName = ({city, region}) => {
    console.log(`${city} ${region}`)
}

showFullName(person)