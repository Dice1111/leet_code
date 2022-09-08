let l1 = [1,2,3];
let l2 = [4,5,6];
let new_l1 = l1.reverse();
let new_l2 = l2.reverse();
let num1 = "";
let num2 = "";
let new_list =[];

for (let x in new_l1){
    num1 += l1[x];
}
for (let y in new_l2){
    num2 += l2[y];
}

console.log(num1);
console.log(num2);
sum = parseInt(num1) + parseInt(num2);
string_sum = sum.toString();

for (x in string_sum){
    let int_num =parseInt(string_sum[x]);
    new_list.push(int_num);
}

final_list = new_list.reverse();
console.log(final_list);
