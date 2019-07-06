const recurseFunc = (arr, idx, level) => {
    const indent = '- '.repeat(level);

    if (arr[idx]) {
        if (Array.isArray(arr[idx])) {
            recurseFunc(arr[idx], 0, level + 1);
        } else {
            console.log(`${indent}${arr[idx]}`);
            // if you put the recurse call in here, then it would miss the next item if there was an array
        }
        recurseFunc(arr, idx + 1, level); // note why this one is here in the article
    }
};

recurseFunc(['a', 'b', ['x', 'y', 'z', ['dd', 'ee']], 'c'], 0, 1);
