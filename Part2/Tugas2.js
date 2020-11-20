const name = [
'Abigail', 'Alexandra', 'Alison',
'Amanda', 'Angela', 'Bella',
'Carol', 'Caroline', 'Carolyn',
'Deirdre', 'Diana', 'Elizabeth',
'Ella', 'Faith', 'Olivia', 'Penelope']

const searchName = (paramsSearchText,limitShow,callback) => { 
 let inputParamsText = new RegExp(paramsSearchText,"i")
 callback(inputParamsText, limitShow)
}
const resultName = (inputParamsText,limitShow) => {
let nameResult = name.filter((elements)=>{
   return elements.search(inputParamsText) != -1
});
console.log(nameResult.slice(0,limitShow));
}

searchName('an',3,resultName)


