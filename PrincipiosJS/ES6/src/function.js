const todos =[
    {text: 'Vai estudar Inglês', done: true},
    {text: 'Vai estudar Programação', done: true},
    {text: 'Vai estudar AWS', done: true}
]

//const doneTodos = todos.filter(function(todo) {
    //return todo.done
//})

const doneTodos = todos.filter((todo) => todo.done)


    console.log(doneTodos)

    


    const anything = () => 'USA'

    const anything = () => [1, 2, 3, 3]

    const anything = () => ({name: 'Will'})

    console.log(anything())


    const anything = () => console.log('The best')


    const anything = () => {
        console.log('amazing')
    }

    anything()

