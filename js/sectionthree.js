var msg = '',
    i = 1,
    squareNumber,
    squareResult;

while (i < 11){

  squareNumber = i * i;
  squareResult = Math.sqrt(squareNumber);

  msg += 'Square root of ' + squareNumber + ' is ' + squareResult + '<br />';
  i++;
}

var el = document.getElementById('blackboard');
el.innerHTML = msg;
