const https = require('https');

const weather_api_key = '5de9db7e634afad8dcbe603f09193c00';
const options = {
  hostname: 'api.openweathermap.org',
  port: 443,
  path: '/data/2.5/forecast?q=London&appid=5de9db7e634afad8dcbe603f09193c00',
  method: 'GET'
}

var data_array = [];

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
  

  res.on('data', d => {
    data_array.push(d);
  })
  
})

  req.on('error', error => {
  console.error(error)
})

req.end()

var json_response;
var dates = [];
var temperatures = [];
const millisecondsInDay = 1000 * 60 * 60 * 24;

setTimeout(() => { console.log("**********************************\nReally need to give the api time to fill up this array with json\n*********************************"); 
json_response = JSON.parse(data_array.toString()); }, 2000); 
//console.log(json_response);

setTimeout(() => { console.log("\nSome more time for this extra map to next dates array\n*********************"); 
json_response['list'].map((e) => dates.push(e['dt_txt'].substring(0,10).replace(/-/g, '/')))}, 3000);

setTimeout(() => { json_response['list'].map((e) => { 
  if(e['dt_txt'].substring(8,10) == new Date(Date.now() + millisecondsInDay).getUTCDate().toString()) { 
    console.log(e['main']['temp'] - 273.15 + e['dt_txt']); temperatures.push(e['main']['temp'] - 273.15)  } }) }, 4000);

setTimeout(() => console.log(temperatures), 4500);


function get_dates() {
  return dates;
}

function get_temps() {
  for(let i=0; i < temperatures.length; i++) {
    if (temperatures[i] > 16) {
      return true;
    }
  }
     return false
    }

module.exports = { get_dates, get_temps }
