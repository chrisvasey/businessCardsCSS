$(document).ready(function(){
	$("li").click(function() {
		//getting selected card
	    var listId = $(this).attr('id');
	    //making readble as a html attribute
	    var readable = "#"+listId;

	    //changing card on stage
	    $(".card").attr({
	    	id: listId+"Card"
	    });
	    //Nav - Selected card
	    $(".listItem").removeClass('active');
	    $(readable).addClass('active');
	});
});