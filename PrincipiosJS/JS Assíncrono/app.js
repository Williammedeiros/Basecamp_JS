var vouComprarRoupas = new Promise(function(resolve,reject){
    setTimout(function() {
        var products = ['Camiseta', 'Boné', 'Calça', 'Bermuda']
        resolve(products)

        //reject('Não deu certo a compra')
    }, 3000)
})


vouComprarRoupas.then(function(products){
    console.log(produts)

})

.catch(function(error){
    console.log(error)

})