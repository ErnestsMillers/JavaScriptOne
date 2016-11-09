// Variables to create welcome message
var date = new Date(),
    hours = date.getHours(),
    message = 'Please preview your order details:',
    greeting = 'Hello,';


// If statement that gives random answer regarding to current time
if (hours < 9) {
  var randomMessage = [
    'What a lovely morning. ',
    'Hope you had a great start of day. ',
    'Just woke up? ',
    'Have you had your coffee? ',
    'Have you finished your morning routine? '
  ];
  greeting = randomMessage[Math.floor(Math.random()*randomMessage.length)];
}
else if (hours < 17) {
  var randomMessage = [
    'Hope your day is going well. ',
    'Soon heading home? ',
    'Have you eaten lunch, huh? ',
    'Finishing last tasks at job? ',
    'Almost there to head back home? '
  ];
  greeting = randomMessage[Math.floor(Math.random()*randomMessage.length)];
}
else {
  var randomMessage = [
    'You should slowly finish your daily routine. ',
    'You should be at home by now. ',
    'Preparing dinner? ',
    'You should go to sleep soon! ' ,
    'Have you prepared everything for tomorrow? '
  ];
  greeting = randomMessage[Math.floor(Math.random()*randomMessage.length)];
}

var welcome = greeting + message;


// Variables to hold details about sign
var sign = 'Your entered sign',
    tiles = sign.length;
    costPerTile = 5;
    subTotal = tiles * costPerTile;
    shipping = 7;
    grandTotal = subTotal + shipping;


// Get the needed elements and replace the content of it
var el = document.getElementById('greeting');               // Greeting
el.textContent = welcome;

var elSign = document.getElementById('userSign');           // Sign
elSign.textContent = sign;

var elCostPerTile = document.getElementById('costPerTile'); // Cost Per Tile
elCostPerTile.textContent = '£' + costPerTile;

var elTiles = document.getElementById('tiles');             // Tiles
elTiles.textContent = tiles;

var elSubTotal = document.getElementById('subTotal');       // SubTotal
elSubTotal.textContent = '£' + subTotal;

var elShipping = document.getElementById('shipping');       // Shipping
elShipping.textContent = '£' + shipping + ' on average.';

var elGrandTotal = document.getElementById('grandTotal');   // GrandTotal
elGrandTotal.textContent = '£' + grandTotal;
