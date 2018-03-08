
  $(document).ready(function (){
    
	getQuote();
	$('#newQuote').on('click', function (){
		getQuote();
	});
});
var getQuote = function (){
  var colors=["#F90","#F36","#906","#69C","#0C3","#66F","#666","#546","#900","#287","#106","#B59"];
 var max=colors.length;
   var ran=Math.floor(Math.random() * (max+ 1));
  $(".container-fluid").css("background-color",colors[ran]);
   $("#newQuote").css("background-color",colors[ran]);
  $(".jumbotron").css("color",colors[ran]);
	$.ajax({
		url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
		dataType: 'jsonp',
		success: function (data){
      data.quoteText;
      data.quoteAuthor;
			$('#quote').html(data.quoteText);
		$('#quoteAuthor').html(data.quoteAuthor);
				var tweet = $('#tweet');
			tweet.off('click');
			tweet.click(function (){
				window.open('https://twitter.com/intent/tweet?text=' +
					encodeURIComponent(data.quoteText + ' - ' +data.quoteAuthor));
			});
    }
	});
};