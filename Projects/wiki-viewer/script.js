$(document).ready(function() {
  $('#searchSubmit').click(function() {
    $.ajax({
      type: 'GET',
      url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&prop=extracts&exsentences=1&search=' + $('#searchString').val() + '&limit=8&callback=?',
      dataType: "json",
      success: processData,
    })
  });

  function processData(data) {
    console.log(data);
    for (i = 0; i < data[2].length; i++) {

      $('#resultViewer').append(
        '<div class="entry animate-bottom" style="display:block">' +
        '<a href="'+ data[3][i] + '">' +
        '<h3>' + data[1][i] + '</h3>' +
        data[2][i] + '</a>' +
        '</div>');
    }
    $('.entry').fadeOut(0);
    $('.entry').fadeIn(500);
  }
});






$('input').keyup(function(event) { //pressing enter triggers api call
  if (event.keyCode == 13) {
    $('#searchSubmit').click();
  }
});
