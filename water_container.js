let heights = [1,8,6,2,5,4,8,3,7];
let length = 0;
let height = 0;
let area_array = [];
let max_area = 0;

for(let x=0;x<heights.length;x++){
    for (let y=x+1;y<heights.length;y++){
        let first_limit = heights[x];
        let second_limit = heights[y];
        length = y-x;
        if(first_limit > second_limit){
            height = second_limit;
        }
        else if(first_limit <= second_limit){
            height = first_limit;
        }
        let area = height * length;
        area_array.push(area);  
    }
}
console.log(area_array);
for(let x in area_array){
    
    if ( area_array[x] > max_area){
        max_area = area_array[x];
    }
}

console.log(max_area);
