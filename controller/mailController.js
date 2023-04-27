require('dotenv').config()
const nodemailer = require('nodemailer');

exports.sendMail=(req,res)=>{

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_ID, // Replace with your Gmail email address
      pass: process.env.PASS // Replace with your Gmail email password
    }
  });
  
  // Define the email options
  const mailOptions = {
    from: 'developmentmailvarad@gmail.com', // Replace with your Gmail email address
    to: `${req.body.email}`, // Replace with recipient email address
    subject: 'PBL auto genterated mail', // Replace with subject of your email
    text: 'This is a test email sent from Node.js using nodemailer! for PBL medicines project from backend' // Replace with the body of your email
  };
  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(400).json({'Error': error});
    } else {
      res.status(200).json({'Email sent successfully': info.response});
    }
  });
  
    
}