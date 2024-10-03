//JSON (JavaScript Object Notation) is a lightweight data format used to store and exchange data between systems in a structured, readable way. It is often used in web development to transmit data between a server and a client. JSON convert all types of data to 'string' except boolean and number.

const shop = {
    Owner: 'Adnan',
    Address: {
        Road: "7 no.",
        Area: 'Nirala',
        City: 'Khulna',
        Country: 'BD'
    },
    Product: ['cpu', 'mobo', 'ram', 'ssd'],
    isOpen: true,
    contact: 1736932170
}
console.log(typeof shop);
const shopJSON = JSON.stringify(shop)  /
//JSON.stringify() => convert to string 
console.log(typeof shopJSON);
const shopParse = JSON.parse(shopJSON)
// JSON.parse() => convert a stringify string to its original type
console.log(typeof shopParse);
