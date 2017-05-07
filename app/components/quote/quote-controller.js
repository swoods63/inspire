function QuoteController(){

	var quoteService = new QuoteService()

	this.getQuote = function getQuote(){

		quoteService.getQuote(drawQuote)

	}
	
	function drawQuote(quote){			
						
	    var template =
			`
			<h2>Quote of the Day</h2>
			<h3 title="${quote.author}">${quote.quote}</h3>			
			
			`
		
		document.getElementById("quote").innerHTML = template
	}

this.getQuote()
}