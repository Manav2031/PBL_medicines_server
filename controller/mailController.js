const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

exports.sendMail=(req,res)=>{
    const mg = mailgun.client({
        username: 'api',
        key: '',
    });
    mg.messages
        .create(sandbox54e0d3ba5c334b85973ef01c1aaa0fce.mailgun.org, {
            from: "Mailgun Sandbox <postmaster@sandbox54e0d3ba5c334b85973ef01c1aaa0fce.mailgun.org>",
            to: [res.body.email],
            subject: "Hello",
            text: "Testing some Mailgun awesomness!",
        })
        .then(msg => console.log(msg)) // logs response data
        .catch(err => console.log(err));
    
}