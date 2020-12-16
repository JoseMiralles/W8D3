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
    transposed = [];
    
}
console.log([
    [1,2,3],
    [4,5,6],
    [7,8,9]
].transpose());