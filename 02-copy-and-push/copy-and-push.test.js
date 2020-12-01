//1. create your function, use `push` to add item to array and return array
// green, commit

const { copyAndPush } = require('./copy-and-push.js');

describe('copyAndPush', () => {
    it('returns a new array with the original array and new item pushed to the end ', () => {
        const arr = [1, 2, 3]; 
        const newValue = 4;

        const newArr = copyAndPush(arr, newValue);
        
        expect(newArr).toEqual([1, 2, 3, 4]);
    });
});