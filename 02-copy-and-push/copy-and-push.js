// create a function that returns a new array with all the items in the original array with a new item pushed to the end.

const copyAndPush = (arr, newValue) => {
    const newArr = [...arr];

    newArr.push(newValue);
    return newArr;
};


module.exports = { copyAndPush };