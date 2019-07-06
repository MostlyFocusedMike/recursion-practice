const baby = (arr, idx) => {
    if (arr[idx]) {
        console.log(`- ${arr[idx]}`);
        baby(arr, idx + 1);
    }
};


const noBells = (arr, idx) => {
    if (arr[idx]) {
        if (Array.isArray(arr[idx])) {
            noBells(arr[idx], 0);
        } else {
            console.log(`- ${arr[idx]}`);
        }
        noBells(arr, idx + 1);
    }
};

const recurseFunc = (arr, idx, level) => {
    const indent = '- '.repeat(level);

    if (arr[idx]) {
        if (Array.isArray(arr[idx])) {
            recurseFunc(arr[idx], 0, level + 1);
        } else {
            console.log(`${indent}${arr[idx]}`);
        }
        recurseFunc(arr, idx + 1, level);
    }
};

console.log('first');
baby(['a', 'b', 'c'], 0);

console.log('actual recursion');
noBells(['a', 'b', ['x', 'y', 'z', ['dd', 'ee']], 'c'], 0);
console.log('Fancy \n');
recurseFunc(['a', 'b', ['x', 'y', 'z', ['dd', 'ee']], 'c'], 0, 1);
