// create a function that returns the name property of an object

const getName = (obj) => {
    const { name } = obj;
    return name;
};

module.exports = { getName };