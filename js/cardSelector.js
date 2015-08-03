$(document).ready(function(){
	$("li").click(function() {
		//getting selected card
	    var listId = $(this).attr('id');
	    //making readble as a html attribute
	    var readable = "#"+listId;

	    //Nav - Selected card
	    $(".listItem").removeClass('active');
	    $(readable).addClass('active');

	    //Checking a card has been selected
	    if(listId == null) { //If nothing selected show welcome card on stage
		    $(".card").attr({
		    	id: "welcomeCard"
		    })	
	    }else { //the selected card shows on stage
		    $(".card").attr({
		    	id: listId+"Card"
		    });
	    };
	});
});