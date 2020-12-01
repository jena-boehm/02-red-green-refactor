// create your function, use bracket notation to get the objects name property
// pass tests and commit

const { getName } = require('./get-name.js');

test('returns the name property of an object', () => {
    const spot = { 
        name: 'spot', 
        age: 5, 
        weight: '20 lbs' 
    }
    const name = getName(spot)
    
    expect(name).toEqual('spot');
});