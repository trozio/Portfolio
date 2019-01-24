M.AutoInit();
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

$("#submit").on("click", function(event){
	event.preventDefault();
	let name = $("#first_name").val();
	let email = $("#email").val();
	let message = $("#message").val();

	
})
