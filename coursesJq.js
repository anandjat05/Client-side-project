//Created by Anand Jat
$(function(){
	//Handler for . ready() called	
	$("#htmlHeading").on("click", function(){
		$.get("courseText2.txt", function(data){
			$("#contentResult").html(data);
		}); //end get
	}); 
		
})//end ready 
