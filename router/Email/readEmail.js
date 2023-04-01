const nodemailer = require("nodemailer");
const randString =()=> {
    const len =8
    let randStr =''
    for (let i = 0; i < len; i++) {
        const ch = Math.floor((Math.random()*10)+1)
        randStr += ch 
    }
    return randStr
}


 const sendEmail =(Email,name,uniqueStr,sap,conf) =>{
 let transport = nodemailer.createTransport({
     service:'Gmail',
    auth: {
       user: 'movieous23@gmail.com',
       pass: 'movieous2030@'
    }
}); 
if (conf ==='password') {
   const mailOptions = {
    from: 'movieous23@gmail.com', 
    to: Email,         
    subject: sap,
    html: `Hi ${name}, to check the the Password , click <a href =http://Localhost:3000/verify/Password/${uniqueStr}>here</a>`
}; 
transport.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log("Message sent");
    }
});
} else  {
    const mailOptions = {
    from: 'movieous23@gmail.com', 
    to: Email,         
    subject: sap,
    html: `Hi ${name},to check  Email, click <a href =http://Localhost:3000/verify/Email/${uniqueStr}>here</a>`
}; 
transport.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log("Message sent");
    }
});
}

  
}

exports.sendEmail=sendEmail
exports.randString=randString