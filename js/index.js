//Template Code before from Wes Modes - Lab 16 Assignment page*/
//Source of API: https://github.com/ChrisMichaelPerezSantiago/covid19
//COVID-19 RealTime Cases Tracker API credited to Chris Michael

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
	        var deathNumEl = data.reports[0].deaths;
	        var recoveredNumEl = data.reports[0].recovered;
	        var activeNumEl = data.reports[0].active_cases[0].currently_infected_patients;
	        //testing to see if correct number is showing
	        console.log(caseNumEl);
	        console.log(deathNumEl);
	        console.log(recoveredNumEl);
	        console.log(activeNumEl);

	        //nice labelling text
	        var caseNumTitle = $('<h1>').text("COVID-19 Global Cases RealTime");
	        var caseDescript = $('<h2>').text("# of Cases");
	        var deathDescript = $('<h2>').text("# of Deaths");
			var recoveredDescript = $('<h2>').text("# of Recovered");
			var activeDescript = $('<h2>').text("# of Active Cases");


	        //appending to output
	        $("#covid-api").append(caseNumTitle);
	        $("#covid-api").append(caseDescript);
	        $("#covid-api").append($('<p>').html(caseNumEl));
	        $("#covid-api").append(deathDescript);
	        $("#covid-api").append($('<p>').html(deathNumEl));
	        $("#covid-api").append(recoveredDescript);
	        $("#covid-api").append($('<p>').html(recoveredNumEl));
	        $("#covid-api").append(activeDescript);
	        $("#covid-api").append($('<p>').html(activeNumEl));
	        
	    },
	    // What we do if the api call fails
	    error: function (jqXHR, textStatus, errorThrown) { 
	        // do stuff
	        console.log("Error:", textStatus, errorThrown);
	    }
	});