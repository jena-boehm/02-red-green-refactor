// create a function that returns a new array with all the items in the original array with a new item pushed to the end.

const copyAndPush = (arr, newValue) => {
    let newArr = [];
    newArr = [...arr, newValue]
    return newArr;
};


module.exports = { copyAndPush };