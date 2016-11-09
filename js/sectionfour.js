// ADDING ITEMS TO START AND END OF LIST
  var list = document.getElementsByTagName('ul')[4];

// ADD NEW ITEM TO END OF LIST
  var newItemLast = document.createElement('li');           // CREATES NEW LI ELEMENT
  var newTextLast = document.createTextNode('cream');       // CREATES NEW TEXT NODE
  newItemLast.appendChild(newTextLast);                     // ADDS TEXT NODE TO LI ELEMENT
  list.appendChild(newItemLast);                            // ADDS LI ELEMENT TO UL ELEMENT

// ADD NEW ITEM START OF LIST

  var newItemFirst = document.createElement('li');
  var newTextFirst = document.createTextNode('kale');
  newItemFirst.appendChild(newTextFirst);
  list.insertBefore(newItemFirst, list.firstChild);


  var listItems =  document.querySelectorAll('#domul li');



// ADD A CLASS TO LIST ITEMS

  var i;
  for (i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
  }


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var heading = document.querySelector('h2[id=heading]');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + ' <span>' + totalItems + '</span>';
heading.innerHTML = newHeading;
