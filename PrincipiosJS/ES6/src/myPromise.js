const myPromise = () => new Promise((resolve, reject) => {
 return setTimeout(()=> {
  resolve('ok')
},2000)

})


//myPromise(),then((response)=> {
   //  console.log(response)
//})

async function exec() {
    //const response = await myPromise()
    await myPromise()
    console.log('ok')
}

//const exec = async() => {
    //const response = await myPromise()
  //  await myPromise()
   // console.log('ok')
//}

exec()