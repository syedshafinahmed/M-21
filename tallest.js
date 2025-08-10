const heights = [65, 66, 68, 72, 78, 60];

function tallest(heights){
    let tall = "";
    for(let i = 0; i < heights.length; i++){
        if(tall < heights[i]){
            tall = heights[i];
        }
    }
    return tall;
}

const lomba = tallest([65, 66, 68, 72, 78, 60]);
console.log(lomba);