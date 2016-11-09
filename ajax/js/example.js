$(function() {

  var times; // THIS WILL STORE JSON

  $.ajax({ // RETRIEVE JSON FILE
    beforeSend: function(xhr){
      if (xhr.overrideMimeType) { // IF SUPPORTED SET MIME TYPE
        xhr.overrideMimeType("application/json");
      }
    }
  });

  function loadJSON() { // COLLECTS DATA FROM JSON FILE
    $.getJSON('data/example.json')
      .done( function(data){ // IF SUCCESSFUL INSERT DATA IN TIMES VARIABLE
        times = data;
      })
      .fail( function() { // IF FAILED TELL THAT TO USER
        $('#event').html('Sorry! We could not load the data at the moment!');
      })
  }

  loadJSON(); // CALL THE FUNCTION



  $('#content').on('click', '#event a', function(e) { // ON CLICK INSERT JSON INTO PAGE

    e.preventDefault();

    var loc = this.id.toUpperCase();
    var newContent = '';

    for (var i = 0; i < times[loc].length; i++) {
      newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
      newContent += '<a href="descriptions.html#';
      newContent += times[loc][i].title.replace(/ /g, '-') + '">';
      newContent += times[loc][i].title + '</a></li>';
    }

    $('#sessions').html('<ul>' + newContent + '</ul>');

    $('#event a.current').removeClass('current');
    $(this).addClass('current');

    $('#details').text('');
  });


  $('#content').on('click', '#sessions li a', function(e) {
    e.preventDefault();
    var fragment = this.href;
    fragment = fragment.replace('#', ' #');
    $('#details').load(fragment);

    $('#sessions a.current').removeClass('current');
    $(this).addClass('current');
  });

  $('nav a').on('click', function(e) {                       // Click on nav
    e.preventDefault();                                      // Prevent loading
    var url = this.href;                                     // Get URL to load

    $('nav a.current').removeClass('current');               // Update nav
    $(this).addClass('current');

    $('#container').remove();                                // Remove old part
    $('#content').load(url + ' #container').hide().fadeIn('slow'); // Add new
  });
});
