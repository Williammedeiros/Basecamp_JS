class Person  {
     constructor(name) {
         this.name = name
     }

     get name() {
         return this._name
     }

     set name(newName) {
         return this,_name
     }    

}

const person = new Person('Will')

person.name = "Dani Peter"

console.log(person.name)