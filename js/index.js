
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
			    url: "https://covid19-server.chrismichael.now.sh/api/v1/AllReports",
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

			        //setting the data to variables
			        var caseNumEl = data.reports[0].cases;
			        console.log(caseNumEl);
			        var caseNumTitle = $('<h1>').text("COVID-19 Global Cases RealTime");
			        //appending to output
			        $("#covid-api").append(caseNumTitle);
			        $("covid-api").append(caseNumEl);
			        
			    },
			    // What we do if the api call fails
			    error: function (jqXHR, textStatus, errorThrown) { 
			        // do stuff
			        console.log("Error:", textStatus, errorThrown);
			    }
			});