const cheerio = require('cheerio');
const { last } = require('cheerio/lib/api/traversing');
const request = require('request');
const write = require('write');


request({
    
    method: 'GET',
    url: 'https://www.cnn.com/'
}, (err, res, body) => {

    if (err) return console.error(err);
    write.sync('cnn.txt', body, { newline: true }); 
    let $ = cheerio.load(body);
    let headlines = [];
    $('div').each(function (i, e) {
        var post = $(this)[0];
        console.log(post);
        headlines[i] = $(this).text();
    });

    console.log(headlines);
   
    //console.log(headlines);
});

/*   statusText.forEach((word) => {
    if (word) {
        word = word.replace(/(\s+)/g, '');
    }
});

*/