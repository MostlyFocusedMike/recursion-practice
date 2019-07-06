const recurseFunc = (arr, idx) => {
    if (arr[idx]) {
        console.log(`- ${arr[idx]}`);
        recurseFunc(arr, idx + 1); // note why this one is here in the article
    }
};

recurseFunc(['a', 'b', 'c'], 0);
