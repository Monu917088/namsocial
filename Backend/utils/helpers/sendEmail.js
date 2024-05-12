import nodemailer from 'nodemailer'
import dotenv from "dotenv"
dotenv.config()
let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user:process.env.MAIL_SENDER,
        pass:process.env.MAIL_SENDER_PASSKEY

    }

})

transporter.verify((error,success)=>{
    if(error){
        console.log(error);

    }
    else{
        console.log("Ready for message");
        console.log(success)
    }

})

const sendEmail= async (mailoptions)=>{
    try{
         await transporter.sendMail(mailoptions);
         return;
    }
    catch(error){
        throw error;

    }
}

export default sendEmail;