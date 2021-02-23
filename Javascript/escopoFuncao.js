// escopo Global

var car = 'Mustang'

function showCar() {
    // escopo local
    console.log(car)
}

showCar()
console.log(car)


function sum(number1, number2) {
    var result = number1 + number2
    return result

}

console.log(sum(10, 10))

var result = "Qualquer valor"

console.log(result)

