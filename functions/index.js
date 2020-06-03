const functions = require('firebase-functions')
const admin=require('firebase-admin');
const nodemailer =require('nodemailer');
admin.initializeApp()
require('dotenv').config()

exports.sendEmailNotification=functions.firestore.document('submissions/{docId}')
.onCreate((snap,ctx)=>{
    const data=snap.data();
    let authData=nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:'itcresilience@gmail.com',
            pass:'nrfzhjuxi123'
        }
    });
let mailText = `
התקבלה פניה חדשה.\r\n
שם הפונה: ${data.name}\r\n
מייל הפונה: ${data.email}\r\n
מספר הפונה: ${data.phone}\r\n
מרכז הפניה: ${data.contactCenter}\r\n
נושא הפניה: ${data.contactIssue}\r\n
הודעה: ${data.message}\r\n
`;
authData.sendMail({
from :'itcresilience@gmail.com',
to:'itcresilience@gmail.com',
subject:'התקבלה פניה חדשה',
text:mailText,
html:mailText,
}).then(res=>console.log('successfully sent that mail')).catch(err=>console.log(err));

});