let express = require('express');
const router = new express.Router();

let app = express();
const path = require('path');
let nodemailer = require('nodemailer');




router.post('/send',async (req, res) => {
    var name = req.body.name
    var subject = req.body.subject

    var email = req.body.email
    var message = req.body.message

    var transporter = nodemailer.createTransport({
        // host: "smtp.gmail.com",
        // port: 465,
        // secure: true,
        // auth: {
        //     user: 'mulatusolomon@gmail.com',
        //     pass: 'orthodox'
        // }
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "df693e1855eb4e",
            pass: "c74d025a6b4fa8"
        }
    });

    var mailOptions = {
        from: email,
        to: 'mulatusolomon@gmail.com',
        subject: subject,
        html: '<h4><strong>Hi I am ' +name+' and this is my message for you '+message+'</strong></h5>'

};

    await transporter.sendMail(mailOptions, async function (error, info) {
        if (error) {
            res.status(400).send({errors: [{msg: error}]});
        } else {
            res.status(201).send({msg: "Created"})
            console.log('Email sent: ' + info.response);
        }
    })
})

module.exports= router;
