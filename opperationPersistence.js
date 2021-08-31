/*
The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

Create two functions that take an integer as an argument and:

Return its additive persistence.
Return its multiplicative persistence.
Examples: Additive Persistence
additivePersistence(1679583) --> 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

additivePersistence(123456) --> 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

additivePersistence(6) --> 0
// Because 6 is already a single-digit integer.
Examples: Multiplicative Persistence
multiplicativePersistence(77) --> 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

multiplicativePersistence(123456) --> 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

multiplicativePersistence(4) --> 0
// Because 4 is already a single-digit integer.
Notes
The input n is never negative.
*/

function additivePersistence(num){  
    let count = 0;
    let arr = [];
    while(num > 9){
        arr.push(num % 10);
        num = Math.floor(num / 10);
    }
    arr.push(num);

    while(arr.length > 1){
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        count++;
        arr = [];
        while(sum > 9){
            arr.push(sum % 10);
            sum = Math.floor(sum / 10);
        }
        arr.push(sum);
    }
    return count;
}

function multiplicativePersistence(num){
    let count = 0;
    let arr = [];
    while(num > 9){
        arr.push(num % 10);
        num = Math.floor(num / 10);
    }
    arr.push(num);

    while(arr.length > 1){
        let product = 1;
        for(let i = 0; i < arr.length; i++){
            product *= arr[i];
        }
        count++;
        arr = [];
        while(product > 9){
            arr.push(product % 10);
            product = Math.floor(product / 10);
        }
        arr.push(product);
    }
    return count;
}

// should return 2
console.log(additivePersistence(123456));

// should return 4
console.log(multiplicativePersistence(77));