// create a function that returns a new array with all the items in the original array and a new item pushed to the end.

const copyAndPush = (arr, newValue) => {
    arr.push(newValue)
    return arr;
};

module.exports = { copyAndPush };