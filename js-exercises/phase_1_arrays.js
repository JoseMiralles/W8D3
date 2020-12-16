Array.prototype.uniq = function() {
    uniqArray = [];

    this.forEach ((x) => {
        if (!uniqArray.includes(x)) {
            uniqArray.push(x)
        }
    });
    return uniqArray;
}
// console.log([1, 1, 2, 2, 3, 4].uniq());


Array.prototype.twoSum = function() {
    newArr = [];

    for (let i = 0; i <= this.length - 2; i++){
        if (this[i] + this[i + 1] === 0){
            newArr.push(i, i+1);
        }
    }

    return newArr;
}
// console.log([1,2,-2].twoSum())


Array.prototype.transpose = function(){
    // let transposed = new Array(this.length);
    let transposed = Array.from({length: this.length}, () => Array.from({length: this.length}))
    
    for (let i = 0; i < this.length; i++){
        for (let x = 0; x < this.length; x++){
            // debugger
            // if (transposed[x] === undefined){
            //     transposed[x] = new Array(this.length)
            // }
            transposed[x][i] = this[i][x]
        }
    }
    return transposed;
}


// console.log([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ].transpose());