//console.log(window.document.body)

//var input = document.getElementById('idade') // seleciona por ID

//var input = document.getElementsByClassName('idade')[0] // Seleciona por CLASSE

//var input = document.getElementsByTagName('input') // seleciona por TAG

var input = document.querySelector('body div#app h1') // Seleciona por seletor especifico

var input = document.querySelector('div#app input [placeholder="idade"]')

var input = document.querySelector('div#app input#idade')

console.log(input.parentElement) // pai

console.log(input.previousElementSibling) // elemento anterior

console.log(input.nextElementSibling) // elemento seguinte

var input = document.querySelectorAll('input')[1] // seleciona por todos os seletores

console.log(input)

var list = document.querySelector('div#app ul')

console.log(list.children[0]) // HTMLCollection  com os Filhos // [0] primeiro filho

