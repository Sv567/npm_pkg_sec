const sum = (arr) => {
    let start = 0;
    let ans = 0;
    while (start < arr.length) {
        ans += arr[start];

        start++;
    }

    return ans;
}

const deleteRepeated = (arr) => {
    let j = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const findEven = (arr) => {
    let j = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr[j] = arr[i];
            j++;
        }
    }

    return newArr;
}


const binarySearch = (arr, target) => {
    let s = 0 ;
    let e = arr.length - 1;

    while(s <= e) {
        let m = Math.floor((s+e) / 2);

        if(arr[m] === target) {
            return m ;
        }else if(arr[s] < target) {
            s = m + 1 ;
        }else{
            e = m - 1;
        }
    }
    return -1 ;

}

const findOdd = (arr) => {
    let newArr = [];
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            newArr[j] = arr[i];
            j++;
        }
    }
    return newArr;
}

const avgOfArray = (arr , sum) => {
   return (sum / arr.length) ;
}

const maxEle = (arr) => {
    let ans = 0 ;

    for(let i = 0 ; i < arr.length ; i++){
        if(ans < arr[i]);
        ans = arr[i];
    }

    return ans ;
}

const reverseArr = (arr) => {
    let newArr = [];
    let j = 0;
    for(let i = arr.length-1 ; i >= 0 ; i-- ){
        newArr[j] = arr[i]
        j++;
    }
    return newArr ;
}

const findMeadian = (arr) => {
    let midian = 0
   if(arr.length % 2 !== 0) {
    midian = arr[arr.length/2];
   }else {
    midian = (arr[(arr.length/2)-1] + arr[arr.length/2]) / 2.0
   }

   return midian ;
}


const findRepeated = (arr) => {
    let  newArr = [];
    let j = 0;
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] === arr[i-1]){
            newArr[j] = arr[i];
            j++;
        }
    }
    console.log(newArr)
    return newArr ;
}




module.exports = { sum, deleteRepeated, findOdd, findEven, binarySearch , avgOfArray , maxEle , reverseArr , findMeadian , findRepeated};