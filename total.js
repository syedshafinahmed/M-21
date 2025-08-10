const products = [
    {name: "shirt", price: 2500},
    {name: "pant", price: 1300},
    {name: "shoes", price: 1800},
    {name: "belt", price: 900},
]

function total(products){
    let price = 0;
    for(let product of products){
        price += product.price;
    }
    return price;
}
const damkoto = total(products);
console.log(damkoto);