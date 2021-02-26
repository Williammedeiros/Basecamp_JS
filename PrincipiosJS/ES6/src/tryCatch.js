const myPromise = () => new Promise((resolve, reject) => {
    return setTimeout(()=> {
     resolve('deu ruim')
   },2000)
   
   })
   
   
  // myPromise(),then(()=> {
  //    console.log('Primeira vez ')
  // }).catch((error)=>{
     //  console.warn(error)
  // })

  const exec = async () => {
      try {
      await myPromise()
      await myPromise()
      console.log('Primeira execução')
      }catch(error) {
          console.warn(error)
      } finally {
          console.log('Finalizou')
      }
  }

  exec()

