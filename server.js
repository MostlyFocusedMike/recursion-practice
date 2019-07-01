const recursiveFunc = (array, index) => {
    if (array[index]) {
        console.log('value: ', array[index]);
        recursiveFunc(array, index + 1)
    } else {
        console.log("That's all folks!")
    }
};

recursiveFunc(['a', 'b', 'c'], 0);

