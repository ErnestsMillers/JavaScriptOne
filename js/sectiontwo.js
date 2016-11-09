/* The script is placed inside an immediately invoked function expression
which helps protect the scope of variables */

(function(){

// CREATE A HOTEL OBJECT USING OBJECT LITERAL SYNTAX

  var hotel = {
    name: 'Wellton',
    roomRate: 200,
    discount: 15,
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  };

// WRITE OUT THE HOTEL NAME, STANDARD RATE AND DISCOUNTED RATE

  var hotelName, roomRate, discountRate;

  hotelName = document.getElementById('hotelName');
  roomRate = document.getElementById('roomRate');
  discountRate = document.getElementById('discountRate');

  hotelName.textContent = hotel.name;
  roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
  discountRate.textContent = '$' + hotel.offerPrice();

// CALCULATE EXPIRY DETAILS FOR OFFER

  var expiryMsg,
      today,
      elEnds;

  function offerExpires(today) {
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    expiryMsg = 'Offer Expires next ';
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
  }

  today = new Date();
  elEnds = document.getElementById('offerEnds');
  elEnds.innerHTML = offerExpires(today);

}());
