Array.prototype.bubbleSort = function() {
    let sorted = false;
    let temp = null;

    while (sorted === false) {
        sorted = true;

        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i+1]) {
                sorted = false;
                temp = this[i+1]
                this[i+1] = this[i]
                this[i] = temp
            }
        }
    }
    return this
}

// console.log([1, 3, 6, 3, 24, 76, 9].bubbleSort())

String.prototype.substrings = function() {
    newArr = [];
    // debugger
    for (let i = 0; i < this.length; i++) {
        for (let x = i+1; x < this.length; x++) {
            // debugger
            newArr.push(this.substring(x, i))
        }
    }
    return newArr;
}

// console.log("watermelon".substrings())