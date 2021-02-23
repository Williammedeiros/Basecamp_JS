// and &&, or||, !not

var email = 'will@yahoo.com'
var pass = '1234'

if(email === 'will@yahoo.com' && pass === '1234') {
    console.log('Usuário autenticado')

} else {
    console.log('Informação incorretas !!!')
}

var age = 18
var sex = 'm'

if (idade >= 18 ||  sex === 'f') {
    console.log('Entrada liberado')
} else {
    console.log('Proibibo a entrada')
}



var sex = 'm'

if (!sex === 'f') {
    console.log('Entrada liberado')
} else {
    console.log('Proibibo a entrada')
}

var isActive = true

isActive = !isActive

console.log(isActive)