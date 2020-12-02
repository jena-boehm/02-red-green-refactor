const request = require('superagent');

const fetchQuotes = async() => {
    const { body } = await request.get(`http://futuramaapi.herokuapp.com/api/quotes`);
    
    const randomQuote = body[Math.floor(Math.random()*body.length)];
    return randomQuote;
};

module.exports = { fetchQuotes };