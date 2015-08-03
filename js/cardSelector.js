$(document).ready(function(){
	$("li").click(function() {
		//getting selected card
	    var listId = $(this).attr('id');
	    //making readble as a html attribute
	    var readable = "#"+listId;

	    //Nav - Selected card
	    $(".listItem").removeClass('active');
	    $(readable).addClass('active');

	    if(listId == null) {
		    //If nothing selected show welcome card on stage
		    $(".card").attr({
		    	id: "welcomeCard"
		    })	
	    } else {
	    	//if something is selected show the selected card
		    $(".card").attr({
		    	id: listId+"Card"
		    });
	    };
	});
});