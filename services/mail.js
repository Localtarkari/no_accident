const nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "dac90af4849279",
      pass: "1b6db3712edd45"
    }
  });

const send_email = (()=>{
  let info = transport.sendMail({ //send emails
    from: 'someone@example.com', // sender address
    to: 'abc@gmail.com', // list of receivers
    subject: "Hello ", // Subject line
    text: "Hello world?", // plain text body
   
},(err,info)=>{
    if (err) return err
    if (info) return info
})})

module.exports = send_email
