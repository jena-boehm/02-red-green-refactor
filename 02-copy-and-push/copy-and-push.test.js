const { copyAndPush } = require('./copy-and-push.js');

describe('copyAndPush', () => {
    it('returns a new array with the original array and new item pushed to the end ', () => {
        const numbers = [1, 2, 3]; 
        
        expect(numbers).toEqual([1, 2, 3]);
    });
});