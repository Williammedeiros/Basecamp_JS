var button = document.querySelector('#app button')

var input = document.querySelector('#app input#idade')

//input.addEventListener('keyup', function () {
 //   alert('Hello Course English')
    // mouseover
//})  

//button.addEventListener('click', function () {
  //  alert('Hello Course English e sua idade é ' + input.value)
    // mouseover
//})   


function showAge() {
    alert('sua idade é' + input.value)
}

button.addEventListener('click', showAge)