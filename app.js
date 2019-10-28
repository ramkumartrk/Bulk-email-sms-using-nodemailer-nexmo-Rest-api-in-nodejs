console.log('app.js in Bulk_SMS_Mail_Sender');

var res_file_path = './res/files/mail_phoneno.json';

var fs = require('fs');
const nodemailer = require('nodemailer');

var jsonContent = fs.readFileSync(res_file_path);

var parsedData = JSON.parse(jsonContent);




Object.keys(parsedData).forEach(function(person)
{
    console.log(person + ' ' + parsedData[person].email + ' ' +  parsedData[person].phoneno);



let transporter  = nodemailer.createTransport({
   service : "Gmail",
   auth:
   {
       user : "ramkumartrk2@gmail.com",
       pass : "narendramodi"
   } 
});


let info = transporter.sendMail({ 
    from : "ramkumartrk2@gmail.com",
    to : parsedData[person].email,
    subject : 'Diwali Wish',
    text : 'Happy Diwali, Wishes from Ramkumar. Have a blast year ahead! Spread Love & Happiness'
},(err,success)=>
{
    if(err) console.log('error:'  + err);
    else 
    {
        console.log('success:' + success);
        console.log('Message Sent:' + info.messageId);
    }
});
});

const nexmo = require('nexmo');

const nexmo_setup = new nexmo({
    apiKey : '2dcb4937',
    apiSecret : 'GQJEZt9y0PH70Ook'
});

const from = '+919787983216';

var to=['+919787983216','+918098305290','+919788983216','+919944715943','+918940900089'];

for(var i=0;i<to.length;i++)
{

const text ='Happy diwali. Spread Love & happiness! Wishes from Ramkumar guys.@ Sivakasi';

nexmo_setup.message.sendSms(from,to[i],text,(err,data)=>{
    if(err)
    console.log('Error:' + err);
    else
    {
    if('Response-data:' + data.messages[0]['status']=== "0")
    {
        console.log("message sent successfully");
    }
    else{
        console.log("Message not yet sent successfully" + data.messages[0]['error-text']);
    }
}
});
}