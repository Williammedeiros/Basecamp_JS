const numbers = [1, 2, 3, 4, 5]

numbers.forEach(function(item){
    console.log(item)
})

numbers.forEach(function(number, index){
    console.log(number, index)
})

numbers.forEach(function(number, index){
    numbers[index] = number + 1
})

console.log(numbers)


const newNumbers = numbers.map(function(number){
    return number + 1
})

console.log(newNumbers)
console.log(numbers)


const total = numbers.reduce(function(total, next){
    return total + next
})

console.log(total)


const todos =[
    {text: 'Vai estudar Inglês', done: true},
    {text: 'Vai estudar Programação', done: true},
    {text: 'Vai estudar AWS', done: true}
]

const doneTodos = todos.filter(function(todo) {
    return todo.done == true
})

console.log(doneTodos)

const doneTodos = todos.filter(function(todo) {
    return todo.text == 'Vai estudar AWS'
})

console.log(doneTodos)

const find = todos.filter(function(todo) {
    return todo.text == 'Vai estudar AWS'
})

console.log(find)


const index= todos.findIndex(function(todo) {
    return todo.text == 'Vai estudar AWS'
})

console.log(find)

const cars = ['Mustang', 'New Beatle', 'Civic']

const hasCivic = cars.some(function(car){
    return car == 'Civic'
})

console.log(hasCivic)


