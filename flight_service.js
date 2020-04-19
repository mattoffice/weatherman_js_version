var Amadeus = require('amadeus');

const api_key = 'Z9Fb2VEMHPrPue68nDfMhPV5Z8cj1YT3';
const secret = 'cRtDOOmAuRKL9RUv';
const weather_api_key = '5de9db7e634afad8dcbe603f09193c00';

var destination;

var amadeus = new Amadeus({
    clientId: api_key,
    clientSecret: secret
  });

  amadeus.shopping.flightOffersSearch.get({
    originLocationCode: 'LGW',
    destinationLocationCode: 'MAD',
    departureDate: '2020-08-01',
    adults: '1'
}).then(function(response){
  destination = response.data[0]['itineraries'][0]['segments'][0]['arrival']['iataCode'];
  console.log(destination);
}).catch(function(responseError){
  console.log(responseError.code);
});

function get_flights() {
    return destination;
}

module.exports = { get_flights }