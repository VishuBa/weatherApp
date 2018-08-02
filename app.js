const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=%20IITJ%20karwad%20Jodhpur%20Rajasthan',
  json: true
},(error, response, body) => {
  console.log(body);
});
