M.AutoInit();
const nodemailer = require('nodemailer');

$(document).ready(function(){
    $('.parallax').parallax();
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      hoverEnabled: false
    });
  });

  setTimeout(function(){
      $("#icon").addClass("scale-in");
  }, 1000)

$("#submit").on("click", function(event){
	event.preventDefault();
	let name = $("#first_name").val();
	let email = $("#email").val();
	let message = $("#message").val();
  let mail = {};
  mail.name = name;
  mail.email = email;
  mail.message = message;




  const transporter = nodemailer.createTransport({
    service: 'outlook.office.com',
    auth: {
      user: 'daniel@daniadelman.com',
      pass: 'pr1ngad2!'
    }
  });

  let mailOptions = {
    from: 'daniel@daniadelman.com',
    to: 'daniel@daniadelman.com',
    subject: 'New Client',
    text: mail
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  	M.textareaAutoResize($("#message"));
})
