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

console.log(sumRec([2,4,6,3]));
