// Menghitung Harga Total barang yang dimasukan
const totalBasket  = (basket) => {
    return new Promise((resolve, reject) => {
        if (basket.length > 0 && Array.isArray(basket)) {
             setTimeout(() => {
            let totalBarang = basket.reduce((acc, current) => {
               return Number(acc) + Number(current)
            })
        let hargaPerBarang = 5000;
        let hitungHarga = totalBarang >= 5 ? totalBarang * hargaPerBarang : "Barang Kurang dari 5"
           resolve(`Harga total semua barang dibasketmu adalah : ${hitungHarga}`)
        }, 1000);
        }else{
        setTimeout(() => {
            reject(new Error('Basket Kosong !!! Tolong Masukan Barang'))
        }, 2000);
        }
    })
}
totalBasket([5, 5])  .then((result) => {
                    console.log(result)
                }).catch((error) => {
                    console.log(error)
                })

/* Reverse Word dengan try catch */

const reverseWord = (word) => {
    return new Promise ((resolve, reject) => {
        let hasil = ''
        for (let i = word.length - 1; i >= 0; i--) {
            hasil += word[i]   
        }
        if (typeof hasil === 'string' && isNaN(hasil)) {
            setTimeout(() => {
                 resolve(`Kata ${word} berhasil dibalik menjadi ${hasil}`)
            }, 2000);
        } else {
            setTimeout(() => {
               reject(new Error('Kata yang kamu balik gagal nih !! coba kamu cek ulang/masukan kembali'))  
            }, 2500);
        }
    })
}
const resultWord = async(word) => {
    try{
        let result = await reverseWord(word)
        console.log(result)
    }catch (err) {
         console.log(err) 
    }
}

resultWord('Arkademy')