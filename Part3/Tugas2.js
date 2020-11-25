const getMount = (callback) => {
    setTimeout(() => {
        let error = true
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July',
                     'August', 'September', 'October', 'November', 'Desember']
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found'),[])
        }
    }, 4000)
}

const showMonth = (showError, showMonth) => {
    let newMonth = ''
    if (showError === null) {
         if (showMonth.length > 0) {
                let array =  showMonth.map((element) => element )
                newMonth += array.join("\n")
             }
             else {
                console.log('Data Bulan tidak ditemukan !!!')
            }
    } else {
        console.log(showError, showMonth)
    }
   return console.log(newMonth)
}
getMount(showMonth)