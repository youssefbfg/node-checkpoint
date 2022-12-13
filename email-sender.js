var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bufalgha@gmail.com',
    pass: 'okjlfkpymabivnve'
  }
});

var mailOptions = {
  from: 'bufalghabusiness@gmail.com',
  to: 'bufalgha@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});