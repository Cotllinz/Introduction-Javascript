const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;
const rataNilai = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4

const cekPeringkatNilai =   rataNilai >= 0 && rataNilai <= 59 ? `Rata - Rata = ${rataNilai} \nGrade E`
                          : rataNilai >= 60 && rataNilai <= 69 ? `Rata - Rata = ${rataNilai} \nGrade D`
                          : rataNilai >=70 && rataNilai <= 79 ? `Rata - Rata = ${rataNilai} \nGrade C` 
                          : rataNilai >=80 && rataNilai <= 89 ? `Rata - Rata = ${rataNilai} \nGrade B`
                          : rataNilai >=90 && rataNilai <= 100 ? `Rata - Rata = ${rataNilai} \nGrade A`
                          : "Nilai Rata - Rata Tidak ada" 

console.log(cekPeringkatNilai)