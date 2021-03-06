const { capitalizeAndFilter } = require('./capitalize-and-filter.js');

describe('capitalizeAndFilter', () => {
    it('takes an array of strings, capitalizes all strings, and filters out any string that starts with the letter f ', () => {
        const array = ['spot', 'rover', 'bingo', 'fred']

        const newArr = capitalizeAndFilter(array);
        
        expect(newArr).toEqual(['SPOT', 'ROVER', 'BINGO']);
    });
});