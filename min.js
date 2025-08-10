const prices = [20000, 16000, 50000, 10000, 12000, 35500];
function min(numbers){
    let lowest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < lowest){
            lowest = numbers[i];
        }
    }
    return lowest;
}
const shoshta = min(prices);
console.log(shoshta);
