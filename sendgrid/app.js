const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SG_KEY} = process.env;
sgMail.setApiKey(SG_KEY);

const userMail = {
    to: "bogdan.lyamzin.d@gmail.com",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Register to site",
    text: "Welcome to our site",
    html: "<strong>Welcome</strong> to our site"
};

sgMail.send(userMail)
    .then(()=> console.log("Email sent"))
    .catch((error)=> console.log(`Email send fail - ${error.code} ${error.message}`))