const utilities = require('./utilities');

//sum
const arr = [1 ,2 , 2, 3, 4, 5, 5, 6 , 6] ;
const target = 4;

const sum = utilities.sum(arr)
console.log(sum);

//deleteReated - 

const deleteRepeated = utilities.deleteRepeated(arr);
console.log(deleteRepeated);

//findEven -

const findEven = utilities.findEven(arr);
console.log(findEven)

//findOdd -

const findOdd = utilities.findOdd(arr);
console.log(findOdd)

//binarySearch --

const binarySearch = utilities.binarySearch(deleteRepeated , target);
console.log(binarySearch);

//avgOfArray - 

const avgOfArray = utilities.avgOfArray(arr ,sum);
console.log(avgOfArray);

//maxEle -

const maxEle = utilities.maxEle(arr);
console.log(maxEle);

//reverseArray -

const reverseArr = utilities.reverseArr(deleteRepeated);
console.log(reverseArr) ;

// findMeadian-

const findMeadian = utilities.findMeadian(deleteRepeated);
console.log(findMeadian);

//findRepeated- 

const findRepeated = utilities.findRepeated(arr);
console.log(findRepeated);