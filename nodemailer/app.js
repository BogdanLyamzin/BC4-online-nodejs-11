const nodemailer = require("nodemailer");
require("dotenv").config();

const nodemailerConfig = {
    host: "mail.adm.tools",
    port: 25,
    secure: false,
    auth: {
        user: "info@sled-studio.com",
        pass: process.env.EMAIL_PASSWORD
    }
}

const transporter = nodemailer.createTransport(nodemailerConfig);

const userMail = {
    to: "bogdan.lyamzin.d@gmail.com",
    from: "info@sled-studio.com",
    subject: "Register to site",
    text: "Welcome to our site"
};

transporter.sendMail(userMail)
    .then(info => console.log(info))
    .catch(error => console.log(error))