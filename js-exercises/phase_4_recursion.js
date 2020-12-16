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


function deepDup(arr) {
    if (arr.some((x) => { !x.isArray })) return [...arr];
    return arr.map((sub) => {
        if (sub.isArray) {
            return deepDup(sub)
        } else {
            return sub
        }
    })

    // debugger
    // return dupped
}

// console.log(deepDup([[1, 2], [[3, 4, [5]], 6], [7, 8]]))

function bsearch(arr, target, left = 0, right = arr.length - 1) {
    // console.log(left)
    // console.log(right)
    
    if (left >= right) {
        if (arr[left] === target) return left
        return -1
    }
    let middle = Math.floor(left + ((right - left)/ 2))
    if (arr[middle] === target) {
        return middle
    } else if (arr[middle] > target) {
        return bsearch(arr, target, left, middle - 1)
    } else {
        return bsearch(arr, target, middle + 1, right)
    }
}

// console.log(bsearch([1, 2, 3, 5, 7, 9, 10, 15], 4))

function mergesort(arr) {
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = mergesort(arr.slice(0, mid))
    let right = mergesort(arr.slice(mid, arr.length))

    return merge(left, right)
}

function merge(left, right) {
    let sorted = []

    if (left.empty || right.empty) {
        if (left[0] > right[0]) {
            sorted.push(right.shift)
        } else {
            sorted.push(left.shift)
        }
    }

    return sorted.concat(left, right)
}

console.log(mergesort([3, 6, 78, 3, 5, 9, 15]))