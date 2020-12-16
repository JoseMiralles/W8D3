function range(start, end) {
    newArr = [start]
    
    if (start > end) { 
        return null
    } else if (start === end) {
        return [end]
    } else {
        debugger
        return newArr.concat(range(start+1, end))
    }
}

// console.log(range(3, 9))

function sumRec(arr) {
    // console.log(arr)
    // debugger
    if (arr.length <= 1) {return arr[0]};

    arr[1] += arr[0]
    arr.shift()
    const result = sumRec(arr)
    
    return result
}
// console.log(sumRec([2,4,6,3]));

function exopnent(base, exp){
    if (exp === 1) return base;

    return exopnent( base, exp - 1 ) * base;
}

function exopnent2(base, exp){
    if (exp === 1) return base;

    if (exp % 2 === 0){
        return exopnent2(base, exp/2) ** 2;
    } else {
        return base * (exopnent2(base, (exp - 1) / 2) ** 2)
    }
}
// console.log(exopnent2(5, 10));


function fibonacci(n){
    if (n === 1) return [1];
    if (n === 2) return [1, 1];

    const previous = fibonacci(n - 1);
    const newNum = previous[previous.length - 1] + previous[previous.length - 2];

    return previous.concat(newNum);
}
// console.log(fibonacci(8));


function deepDup(arr)
    
end