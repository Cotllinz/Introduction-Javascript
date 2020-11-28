const divideAndSort = (sortNumb) => {
  if (typeof sortNumb === "number" && sortNumb) {
    let removeZero = sortNumb.toString().split(0);
    let result = "";
    let x = removeZero.length
    for (let i = 0; i < x; i++) {
      result += removeZero[i]
        .split("")
        .sort((a, b) => a - b)
        .join("");
    }
    console.log(Number(result));
  } else {
    console.log("Input harus number dan terisi/tidak kosong");
  }
};
divideAndSort(5956560159466056);
