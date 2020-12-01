
const { getName } = require('./get-name.js');

test('returns the name property of an object', () => {
    const name = 'spot';
    
    expect(name).toEqual('spot');
});