const numbers = [45, 54, 23, 98, 19];
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers;
//     console.log(number);
// }
for (const number of numbers) {
    console.log(number);
}

const products = [
    { id: 1, name: 'walton phone', price: 19000 },
    { id: 2, name: 'walton phone2', price: 19000 },
    { id: 3, name: 'walton phone3', price: 19000 },
    { id: 4, name: 'walton phone4', price: 19000 },
    { id: 5, name: 'walton phone5', price: 19000 },
    { id: 6, name: 'walton phone6', price: 19000 },
    { id: 7, name: 'walton phone7', price: 19000 },
    { id: 8, name: 'walton phone8', price: 19000 }
]

// for(const product of products){
//     console.log(product);
// }


function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone5');
console.log(result);