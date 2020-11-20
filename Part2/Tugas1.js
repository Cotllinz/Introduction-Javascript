/* 
1. Method : toString() -- Method yang mereturn value array/object menjadi string Value
2. Method : concat() -- Method yang mencombine 2 atau lebih string terpisah menjadi 1 string baru
3. Method : search() -- Method yang mencari string yang diinginkan dan output yang dihasilkan adalah berupa number dari posisi string yang di search/cari dan method akan mereturn 
                        output -1 jika kata yang dicari tidak ditemukan
4. Method : pop() -- Method yang akan menghapus value/index terakhir dari array dan ouputnya mereturn array tersebut
5. Method : shift()  -- Method Kebalikan dari pop yaitu menghapus value/index pertama dari array dan outputnya mereturn array tersebut
6. Method : splice() -- Method yang berguna menghapus value di array tetapi dengan menggunakan speksifikasi/ketentuan, outputnya mereturn array yang dihapus
                        dan juga bisa menambahkan value baru kedalam array tersebut
7. Method : slice() -- Method yang menyeleksi array dengan diberi nilai index dengan ketentuan didalam method slice dan outputnya adalah array baru yg telah diseleksi
8. Method : push() -- Method untuk menambahkan value baru kedalam array dan penambahan akan menjadi value terakhir atau index terakhir dari array 
                      dan outputnya mereturn jumlah dari array
9. Methhod : fill() -- Method merubah semua value diarray dengan nilai statis yg diberikan
10. Method : includes() -- Method yang menentukan apakah value yang kita cari ada didalam array dengan output boolean
*/

/* Implementasi Method */

// toString()
let toString = ["Rudy", "Galih"]
console.log("Method : toSting() -- "+ toString.toString())

// concat()
let concat1 = "Rudy"
let concat2 = "Galih"
let concatResult = concat1.concat(concat2)
console.log("Method : concat() -- "+ concatResult)

// search()
let search = "Rudy Galih Join Bootcamp Arkademy"
console.log("Method : search() -- "+ search.search("Rudy"))

// pop()
let pop = ["Makan", "Tidur", "Mandi", "Berenang"] // Ouput : Berenang -- Karena Berenang adalah value/index terakhir di array
console.log(`Method: pop() -- Array yang Hilang atau dihapus "${pop.pop()}" Jumlah Array yang tersisa ${pop.length}`)
console.log(pop)

// unshift()
let shift = ["Makan", "Tidur", "Mandi", "Berenang"] // Ouput : Makam -- Karena Berenang adalah value/index pertama di array
console.log(`Method: shift() -- Array yang Hilang atau dihapus "${shift.shift()}" Jumlah Array yang tersisa ${shift.length}`)
console.log(shift)

// splice()
let splice = ["Makan", "Tidur", "Mandi", "Berenang"]
console.log("-------------splice()-----------------")
console.log(splice.splice(1,3,"Bangun")) 
/* 
number 1 sebagai index dari array dan juga start penghapus array 
number 2 berapa banyak array yang ingin dihapus jika diberi number 0 tidak ada yang dhapus
string belakang bisa menambah value kedalam array dengan pacuan dari number 1
*/
console.log(splice)

// slice()
let slice = ["Makan", "Tidur", "Mandi", "Berenang"]
console.log("-------------slice()-----------------")
console.log(slice.slice(0,3))
/* 
number 1 adalah start / dimulai dari index keberapa - value number 1 yaitu index dari array
number 2 sebagai akhir/pembatas dari seleksi tetapi tidak diinclude kedalam array - value number 2 yaitu index dari array
*/

// push()
let push = ["Makan", "Tidur", "Mandi", "Berenang"]
console.log("-------------push()-----------------")
console.log(push.push("Bangun"))
console.log(push)

//fill()
let fill = ["Makan", "Tidur", "Mandi", "Berenang"]
console.log("-------------fill()-----------------")
console.log(fill.fill("Jalan"))

//includes()
let includes = ["Makan", "Tidur", "Mandi", "Berenang"]
console.log("-------------includes()-----------------")
console.log(includes.includes("Mandi"))