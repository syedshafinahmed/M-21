function woodQuantity(chair, table, bed){
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    const allChair = chair * perChair;
    const allTable = table * perTable;
    const allBed = bed * perBed;

    const all = allChair + allTable + allBed;
    return all;
}
const kath = woodQuantity(1, 1, 4);
console.log(kath);