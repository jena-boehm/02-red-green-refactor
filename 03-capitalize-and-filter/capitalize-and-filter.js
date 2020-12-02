const capitalizeAndFilter = (arr) => {
    const newArr = []; 

    arr.forEach(item => {
        const uppercaseItem = item.toUpperCase();

        if(uppercaseItem.charAt(0) !== 'F') {
            newArr.push(uppercaseItem);
        };
    });

    return newArr;
};

module.exports = { capitalizeAndFilter };