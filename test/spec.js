var assert = require('assert');
var getPrimes = require('../primes.js');

describe('The getPrimes function', function() {
  it('should return the first n primes for input n', function() {
    assert.deepEqual(getPrimes(1), [2]);
    assert.deepEqual(getPrimes(5), [2, 3, 5, 7, 11]);
    assert.deepEqual(getPrimes(21), [2, 3, 5, 7, 11, 13, 17, 19, 23, 
      29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73]);
  });
});