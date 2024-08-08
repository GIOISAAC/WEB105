function validateLogin() {
    const userID = document.getElementById("firstName").value;
    const password = document.getElementById("password").value;
  
    if (userID === "Dumisani" && password === "BIT22114173") {
      // Login successful
      sendConfirmationMessage();
    } else {
      // Login failed
      showPopupMessage("Invalid UserID or password.");
    }
  }
  
  function sendConfirmationMessage() {
    // Use Twilio or another SMS API to send a confirmation message to the phone number
    // For example:
    // const message = "Your login was successful.";
    // sendSMS(phoneNumber, message);
  
    // Display a confirmation message
    showPopupMessage("A confirmation message has been sent to your phone number.");
  }
  
  function showPopupMessage(message) {
    // Display the popup message
    document.getElementById("popupText").innerText = message;
    document.getElementById("popupMessage").style.display = "block";
  }


  const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Kuhnoot@gmail.com',
    pass: '@kuhnoot20015'
  }
});

const mailOptions = {
  from: 'manaanoot@gmail.com',
  to: 'Kuhnoot@gmail.com',
  subject: 'Test email',
  text: 'This is a test email from nodemailer',
  html: '<b>This is a test email from nodemailer</b>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});