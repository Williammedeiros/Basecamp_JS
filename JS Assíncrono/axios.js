var button = document.querySelector('#app button')

button.addEventListener('click', function(){
 axios
   .get('https://api.github.com/users')
   .then(function (response){
       console.log(response)
       //console.log(response.data[0].login)
   }) 
   .catch(function(error){
       console.log(error)
   })
   .finally(function(){
       console.log()
   })


})