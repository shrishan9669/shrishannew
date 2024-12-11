const express = require('express')
const { PrismaClient } = require('@prisma/client');
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json());

const prisma = new PrismaClient();

app.post('/contactUs',async(req,res)=>{
    const {name,email,phone,message} = req.body;

    const transporter = nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'davv9669@gmail.com',
            pass:'bsjt dfsi hunh cqsa'
        }
    })

    const mailoptions = {
        from:'davv9669@gmail.com',
        to:email,
        subject:'Thank you for Contacting us ',
        text:`Dear ${name}
        Thank you for contacting AIRPLAN private limited.!
        Here are your details:
        1.${name}
        2.${email}
        3.${phone}
        4.${message}
        `
    };

    try{
        await transporter.sendMail(mailoptions)
        res.status(200).json({msg:"Email confirmation sent!!"})
    }catch(err){
        console.error("Error sending email:",err)
        res.status(500).send('Error registering user.');
    }
})
app.post('/register',async(req,res)=>{
    const {name,email,phone,age,address,description} = req.body;

    const transporter = nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'davv9669@gmail.com',
            pass:'bsjt dfsi hunh cqsa'
        }
    })

    const mailoptions = {
        from:'davv9669@gmail.com',
        to:email,
        subject:'Registration Confirmation',
        text:`Dear ${name}
        Thank you for registering!
        Here are your details:
        1.${name}
        2.${email}
        3.${age}
        4.${address}
        5.${description}
        6.${phone}`
    };

    try{
        await transporter.sendMail(mailoptions)
        res.status(200).json({msg:'Registration successfull! Confirmation email sent.'})
    }catch(err){
        console.error("Error sending email:",err)
        res.status(500).send('Error registering user.');
    }
})

app.post('/signup',async(req,res)=>{
    const {name,email,password,company_name} = req.body;

  const new_user =   await prisma.user.create({
        data:{
           name:name,
           email:email,
           password:password,
           company_name:company_name
        }
    })

    res.json({
        msg:"New user is created!!",
        id:new_user.id
    })


})
app.post('/signin',async(req,res)=>{
    const {email,password} = req.body;

    const findUser = await prisma.user.findUnique({
        where:{
            email:email,
            password:password
        }
    })

    if(!findUser){
        return res.json({
            msg:"Incorrect password or Email!!"
        })
    }

    res.json({
        msg:"Successfully Logged In!!",
        user_id:findUser.id
    })
})



const PORT = 3000;
app.listen(PORT,()=>{
    console.log('server is running on port' + PORT)
})