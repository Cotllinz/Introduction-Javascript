const seleksiNilai= (nilaiAwal, nilaiAkhir, Arrays) =>{
  let ArraySort = Arrays.sort((a,b) => a - b)
  return typeof nilaiAwal === "number" && typeof nilaiAkhir === "number" && Array.isArray(ArraySort) ?
                nilaiAwal < nilaiAkhir && ArraySort.length > 5 ? ArraySort.filter(arr => (arr > nilaiAwal && arr < nilaiAkhir)) : 
                nilaiAwal > nilaiAkhir ? "Nilai akhir harus lebih besar dari nilai awal" : 
                ArraySort.length < 5 ? "Jumlah angka dalam dataArray tidak ada" : ""
               : "Input yang anda masukan tidak sesuai ketentuan" 

}
console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])) 

