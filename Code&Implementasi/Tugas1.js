//PalindromTeks
const palindromTeks = (teks) => {
  if (teks) {
    let rubah = teks.toUpperCase();
    let hasil = "";
    let x = teks.length - 1;
    for (let i = x; i >= 0; i--) {
      hasil += rubah[i];
    }
    console.log(hasil);
    if (hasil === rubah) {
      console.log("Palindrom");
    } else {
      console.log("Bukan Palindrom");
    }
  } else {
    console.log("Masukan Teks");
  }
};
palindromTeks("malam");

//ReverseWords
const reverseWords = (teks) => {
  if (teks) {
    console.log(teks.split(" ").reverse().join(" "));
  } else {
    console.log("masukan teks/kalimat");
  }
};

reverseWords("Saya suka Javascript");

