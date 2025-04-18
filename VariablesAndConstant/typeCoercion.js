let shoppingcart = [
    {
        name : "Wireless Mouse",
        price : "19.99",  // string
    },
    {
        name : " Keyboard",
        price: 49.99, //Number
    },
    {
        name : "Monitor",
        price : "129.99", // string
    }
]

function calculationTotal(cart){
    let total = 0;

    cart.forEach(element => {
        total += Number(element.price);
    });

    return total.toFixed(2);
}

let totalPrice = calculationTotal(shoppingcart);
console.log(`Total price  : ${totalPrice}`);
