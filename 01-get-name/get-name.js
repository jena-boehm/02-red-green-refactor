// create a function that returns the name property of an object

const spot = { 
    name: 'spot', 
    age: 5, 
    weight: '20 lbs' 
}

const character = { 
    _id: '5cf5679a915ecad153ab68c9', 
    name: 'Aang' 
};

const getName = (obj) => {
    const { name } = obj;
    return name;
}

console.log(getName(spot), getName(character));

module.exports = {
    getName
}