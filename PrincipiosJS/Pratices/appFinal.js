var submitButton = document.querySelector('#app form button')

var zipCodeField = document.querySelector('#app form input')

var content = document.querySelector('#app main')


submitButton.addEventListener('click', run)

function run(event) {
    event.preventDefault()

    var zipCode = zipCodeField.value

    zipCode = zipCode.replace(' ', '')

    zipCode = zipCode.replace('.', '')

    zipCode = zipCode.trim()

    //console.log(zipCode)

    axios
    .get('https://viacep.com.br/ws/'+ zipCode +'/json/')
    .then(function(response) {
        if(response.data.erro) {
            throw new Error('Cep Inválido')
        }
       // console.log(response.data)
       content.innerHTML = ''
       createLine(response.data.logradouro)
       createLine(response.data.localidade + '/' + response.data.uf)
       createLine(response.data.bairro)
    })
    .catch(function(error) {
        content.innerHTML = ''
        createLine('Ops: Algo errado com as informações')
        //console.log(error)
    })
}

function createLine(text) {
    var line = document.createElement('p')
    var text = document.createTextNode(text)

    line.appendChild(text)
    content.appendChild(line)
}