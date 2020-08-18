const nodemailer = require('nodemailer');

function sendMail(mail){
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
}

module.exports = {
  sendMail
}
