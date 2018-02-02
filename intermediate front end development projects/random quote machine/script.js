var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var tweetQuote = "";

var getQuote = function(data) {
  $("#quote").text(data.quoteText);
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $("#author").text(data.quoteAuthor);
  tweetQuote = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' - ' + data.quoteAuthor;
  $("#tweet-quote").attr("href", tweetQuote)
};

$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');
});

$("#newQuote").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});
