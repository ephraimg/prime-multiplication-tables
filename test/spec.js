
describe('The getPrimes function', function() {
  it('should return the first n primes for input n', function() {
    assert.deepEqual(getPrimes(1), [2]);
    assert.deepEqual(getPrimes(5), [2, 3, 5, 7, 11]);
    assert.deepEqual(getPrimes(21), [2, 3, 5, 7, 11, 13, 17, 19, 23, 
      29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73]);
  });
});

describe('The makeTableData function', function() {
  it('should make an n x n array from an n-length input', function() {
    let table = makeTableData(7);
    assert.equal(table.length, 7);
    assert.equal(table[0].length, 7);
  });
});

describe('The makeTableData function', function() {
  it('should calculate products correctly', function() {
    let table = makeTableData(11);
    assert.equal(table[2][3], 7 * 5);
    assert.equal(table[3][2], table[2][3]);
    assert.equal(table[10][10], 31 * 31);
  });
});