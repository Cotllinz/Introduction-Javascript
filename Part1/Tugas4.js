let data = {
id: 1,
name: "Leanne Graham",
username: "Bret",
email: "Sincere@april.biz",
address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
        },
phone: "1-770-736-8031 x56442",
website: "hildegard.org",
}
let changeData = {...data,name:"Rudy Galih Putra Wijaya",email:"rdy.galih@gmail.com",hobby:"Fitnes dan Coding"}
console.log(changeData.name,changeData.email,changeData.hobby)

let {street, city} = data.address
console.log(street,city)