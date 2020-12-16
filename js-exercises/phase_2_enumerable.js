Array.prototype.myEach = function(callback) {
    
    for ( let i = 0; i < this.length; i++) callback(this[i]);

}
// let arr = [1,2,3,4];
// arr.myEach((x) => {
//     console.log(x)
// });


Array.prototype.myMap = function(callback) {
    newArr = [];

    this.myEach((x) => {
        newArr.push(callback(x))
    })

    return newArr
}
// let arr = [1,2,3,4];
// console.log( arr.myMap((x) => {
//     return x * x
// }) );


Array.prototype.myReduce = function(callback, acc = this[0]){
    if (acc !== this[0]){
        this.myEach((x) => {
            acc = callback(acc, x)
        });
    } else {
        for (let i = 1; i < this.length; i++){
            acc = callback(acc, this[i])
        }
    }
    return acc;
}

// // without initialValue
// let arr = [1, 2, 3]; 
// console.log(arr.myReduce(function(acc, el) {
//     return acc + el;
// })); // => 6
  
// // with initialValue
// arr = [1, 2, 3];
// console.log(arr.myReduce(function(acc, el) {
// return acc + el;
// }, 25)); // => 31
  

