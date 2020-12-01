const { fetchQuotes } = require('./fetch-quotes.js');

describe('fetchQuotes', () => {
    it('returns a single Futurama quote', () => {
        const quote = {
            name: '...',
            text: '...',
            image: '...'
          }
        
        expect(quote).toEqual({
            name: '...',
            text: '...',
            image: '...'
          });
    });
});