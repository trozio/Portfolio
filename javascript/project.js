M.AutoInit();
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

$("#submit").on("click", function(event){
	event.preventDefault();
	let name = $("#first_name").val();
	let email = $("#email").val();
	let message = $("#message").val();
    // sendMail();
    $("#first_name").empty();
    $("#email").empty();
    $("#message").empty();
	M.textareaAutoResize($("#message"));
})
// function sendMail() {
// var link = "mailto:daniel.l.adelman@gmail.com"
//          + "?cc=myCCaddress@example.com"
//          + "&subject=" + escape("This is my subject")
//          + "&body=" + escape($("#first_name").val() + $("#email").val() + $("#message").val())
// ;
//
// window.location.href = link;
// }
