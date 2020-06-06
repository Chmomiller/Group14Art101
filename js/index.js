
//adding the scroll reveal so that the ids slowly show up.
//source: https://scrollrevealjs.org/guide/installation.html
/*ScrollReveal().reveal('.header');
ScrollReveal().reveal('.paragraph', { delay: 100 });
ScrollReveal().reveal('.list', { delay: 100 });

//API that is a COVID-19 case tracker.
	/*function getImage(url) {
		$('#output').empty(); //clears the page every time

			//Template Code before from Wes Modes - Lab 16 Assignment page*/
			// Using the core $.ajax() method
			$.ajax({
			    // The URL for the request (from the api docs)
			    url: "https://covid-simple-api.now.sh/api/world",
			    // The data to send (will be converted to a query string)
			    data: { },
			    // Whether this is a POST or GET request
			    type: "GET",
			    // The type of data we expect back
			    dataType : "json",
			    // What do we do when the api call is successful
			    //   all the action goes in here
			    success: function(data) {
			        console.log(data);

			        //appending to output
			        $("#output").append(data.totalCases);
			        
			    },
			    // What we do if the api call fails
			    error: function (jqXHR, textStatus, errorThrown) { 
			        // do stuff
			        console.log("Error:", textStatus, errorThrown);
			    }
			})