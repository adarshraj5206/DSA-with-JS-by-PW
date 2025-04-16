const product = [
    {                                            
        name : "Wireless Mouse",  // string
        price : 500.99,   // number
        inStock : true,  // Boolean
    },                                          //obj
    {                                            
        name : "Wireless HeadPhone",  // string
        price : 10999.2,   // number
        inStock : false,  // Boolean
    }, 
    {                                            
        name : "laptop",  // string
        price : 50000,   // number
        inStock : true,  // Boolean
    }, 
    {                                            
        name : "Vivo x900",  // string
        price : 900000,   // number
        inStock : false,  // Boolean
    }, 
];                                             // array


function PrintProductWithDetails(product){       // funtion
    product.forEach(element => {
        console.log(`product Name : ${element.name}`);
        console.log(`product Price : ${element.price}`);
        console.log(`product is instock : ${element.inStock ? "yes" : "no"}`);
        console.log("\n");
    });
}


PrintProductWithDetails(product);