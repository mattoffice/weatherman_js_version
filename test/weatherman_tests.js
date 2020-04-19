//require whatever you need here from other files
const { get_dates, get_temps } = require('../weather_service');
const { get_flights } = require('../flight_service');

var assert = require('assert');

  setTimeout(function() {
    millisecondsInDay = 1000 * 60 * 60 * 24;
  
    describe('Return tomorrow\'s date', function() {
           describe('#get_dates()', function() {
             it('returns true if the day, month and year are the same as tomorrow\'s date', function() {
               assert.equal(get_dates()[0].slice(-2), new Date(Date.now() + millisecondsInDay).getUTCDate());
             });
           });
         });

         describe('Tell me if temperature is above 16 degrees', function() {
            describe('#get_temps()', function() {
              it('returns true if the temp is above 16 degrees', function() {
                assert.ok(get_temps(), "Decent temperature that like, let we gan holiday");
              });
            });
          });

          describe('Get flight data if the search city has temp over 16 degrees, eg. Madrid', function() {
            describe('#get_flights()', function() {
              it('returns a valid flight destination code', function() {
                assert.equal(get_flights(), "MAD");
              });
            });
          });
  
    run();
  }, 5000);

  




// var assert = require('assert');
// describe('Return tomorrow\'s date', function() {
//   describe('#get_dates()', function() {
//     it('returns true if the day, month and year are the same as tomorrow\'s date', function() {
//       assert.equal(get_dates(), new Date(Date.now() + millisecondsInDay).toLocaleDateString("en-GB"));
//     });
//   });
// });

