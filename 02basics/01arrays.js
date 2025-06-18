const arr=[1,2,3,4,5]
const arr1=["shakti","mukti","arth"]

console.log(arr[0]);

const myarr=new Array(1,2,3,4,5)

//array methods 

// arr.push(6)
// arr.push(7)
// arr.pop()

arr.unshift(10)
arr.shift()
// console.log(arr);

// slice ,splice




const arr5 = [1, 2, 3, 4, 5];
const sliced = arr5.slice(1, 4); // from index 1 to 3
console.log(sliced); // [2, 3, 4]
console.log(arr5);    // original array remains [1, 2, 3, 4, 5]


const arr4 = [1, 2, 3, 4, 5];
const spliced = arr4.splice(1, 2); // remove 2 items from index 1
console.log(spliced); // [2, 3]
console.log(arr4);     // modified array: [1, 4, 5]