// const data = [{id: 1, name:'abul', address: 'dhaka'}]
// console.log(data[0].address);

// const products = {
//     count: 5000,
//     data: [
//         {id: 1, name: 'lenovo laptop', price: 65000},
//         {id: 2, name:'Asus zenbook', price: 70000}
//     ]
// }
// console.log(products.data[1].name);

const user = {
    id: 5022,
    name: 'Adnan_Nahid',
    address: {
        place: {
            first: 'New Market',
            second: '7 number',
            third: 'Batiyaghata'
        }
    },
    city: 'khulna'
}
console.log(user.address.street?.first);