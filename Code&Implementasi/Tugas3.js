const divideAndSort = (number) => {
if (typeof number === "number" && number) {
      let removeZero = number.toString().split(0);
      let result = "";
      for (let i = 0; i < removeZero.length; i++) {
        result += removeZero[i]
          .split("")
          .sort((a, b) => a - b)
          .join("");
      }
      console.log(Number(result));
}else{
    console.log("Input harus number dan terisi/tidak kosong")
}

};
divideAndSort(5956560159466056);


