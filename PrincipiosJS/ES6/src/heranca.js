class Veiculo {
    constructor(rodas) {
        this.rodas = rodas
    }

    acelerar() {
        console.log('Velocidade máxima')
    }
}

class Moto extends Veiculo {
    constructor(rodas, capacete) {
        super(rodas) //new Veiculo
        this.capacete = capacete

    }

    empinar() {
        console.log('empinada maluca')
    }

   // acelerar() {
      //  super.acelerar()
      //  console.log('Esta muito veloz')
   // }

   usandoCapacete(){
       console.log(this.capacete)
   }


}

const bross = new Moto(2)

bross.acelerar()

bross.usandoCapacete()




