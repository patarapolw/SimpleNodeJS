const rp = require('request-promise');
const $ = require('cheerio');

rp('https://medium.freecodecamp.org/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3')
  .then(function(html){
    console.log($('title', html).text());
  })
  .catch(function(err){
    console.error(err);
  });