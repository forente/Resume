console.log("Success!!");



function showResume(){
	
	var resumeVisible = false; 

	$("header").hide();
	$('main').hide();
	
	
	$('button').on('click', function(){
		
		if (!resumeVisible){
			
			$("header").show();
			$('main').show();
			$('button').text('Remove Resume');
			resumeVisible = true;
		}
		
		else{
			$("header").hide();
			$('main').hide();
			$('button').text('Reveal Resume');
			resumeVisible = false; 
		}
		
	});
	


}



$(document).ready(showResume);