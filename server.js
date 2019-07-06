const recursiveFunc = (array, index) => {
    if (array[index]) {
        console.log('value: ', array[index]);
        recursiveFunc(array, index + 1);
    } else {
        console.log("That's all folks!");
    }
};

// // first layer
// const recursiveFunc = (2) => {
//     console.log(2);
//     recursiveFunc(2 - 1);
// };

//     // second layer
//     recursiveFunc = (1) => {
//         console.log(1);
//         recursiveFunc(1 - 1);
//     }

//         recursiveFunc(0) {
//             console.log(0);
//             recursiveFunc(0 - 1);
//         }

// const recursiveFunc = (num) => {
//     console.log(num);
//     for (i = num - 1; i > 0; i--) {
//         console.log(i);
//     }
// }

const recurseFunc = (arr, idx, levels) => {
    if (arr[idx]) {
        if (Array.isArray(arr[idx])) {
            recurseFunc(arr[idx], 0, levels + 1);
        } else {
            const indent = '- '.repeat(levels);
            console.log(`${indent}${arr[idx]}`);
        }
        recurseFunc(arr, idx + 1, levels);
    }
};


// recursiveFunc(['a', 'b', 'c'], 0);
recurseFunc(['a', 'b', ['x', 'y', 'z', ['dd', 'ee']], 'c'], 0, 1);

// function fib(n) {
//     if (n < 2){
//       return n
//     }
//     return fib(n - 1) + fib (n - 2)
//   }

//   console.log(fib(5));
