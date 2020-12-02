// create a function that takes an array of strings capitalize all strings and filter out any string that starts with the letter f.

const capitalizeAndFilter = (arr) => {
    const newArr = []; 

    for(let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const uppercaseItem =  item.toUpperCase();

        if(uppercaseItem.charAt(0) !== 'F') {
            newArr.push(uppercaseItem);
        }
    }
    return newArr;
};

module.exports = { capitalizeAndFilter };