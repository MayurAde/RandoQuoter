const   {getRandomQuote} = require("../index");

test('get Random quotes ', () =>{
    const quote = getRandomQuote();
    expect(quote).toBeDefined();
    expect(quote).toHaveProperty('text');
    expect(quote).toHaveProperty('author');

})