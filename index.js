
function handleClick(inputText) {
  // if input contains non-digits, reject it
  if (!(/^\d+$/).test(inputText) || inputText === '0') {
    alert('Invalid input! Please enter a positive integer.');
    return null;
  }
  // turn input text into integer
  let inputNum = Number(inputText);
  // generate all the products for the table
  let data = makeTableData(inputNum);
  // create and render the table to the DOM
  renderTable(data);
}

function makeTableData(n) {
  // use helper function from primes.js
  let primes = getPrimes(n);
  // create a 2D array to hold products of primes
  let data = Array(n).fill(0).map(el => Array(n));
  // fill data array with products
  for (let i = 0; i < primes.length; i++) {
    for (let j = 0; j < primes.length; j++) {
      data[i][j] = primes[i] * primes[j];
      data[j][i] = data[i][j];
    }  
  }
  return data;
}

function renderTable(data) {
  // use the n primes as column headers
  let colHeaders = '';
  for (let i = 0; i < data[0].length; i++) {
    colHeaders += `<th scope="col">${primes[i]}</th>`
  }
  // create the table skeleton
  let $table = $(`
    <table>
      <tr>
        <th></th>
        ${colHeaders}
      </tr>
    </table>
  `);
  // now we'll iterate through the n primes to make rows
  for (let row = 0; row < data.length; row++) {
    // create a row skeleton with the prime as header
    let $row = $(`
      <tr>
        <th scope="row">
          ${primes[row]}
        </th>
      </tr>
    `);
    // in the row, have a column entry for each product
    for (let col = 0; col < data.length; col++) {
      $row.append("<td>" + data[row][col] + "</td>");
    }
    // append the row to the whole table
    $table.append($row);
  }
  // clear any old table away and render the new one
  $("#primesTable").empty();
  $("#primesTable").append($table);
}
