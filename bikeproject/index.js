const express= require('express');
const nodemailer = require("nodemailer")

const cors=require('cors');
const app=express();
const userModel=require('./models/Db')
app.use(cors())
app.use(express.json());

app.post('/delet', async (req, res) => {
    const id=req.body.selectedId
    await userModel.findByIdAndDelete(id)
})



app.get("/view",(req,res)=>{
    userModel.find()
    .then(notes=>res.json(notes))
    .catch(err=>res.json(err))
})
app.post("/save",async (req,res)=>{
    
    const newUser=new userModel(
        {
            "Name":req.body.Name,
            "PhoneNumber":req.body.PhoneNumber,
            "Email":req.body.Email, 
            "Password":req.body.Password, 
           "BikeService" :req.body.BikeService, 
           "OilChange":req.body.OilChange,
           "Genderalservice":req.body.Genderalservice,
           "Status":req.body.Status,
        }
    )
 
    
    await newUser.save();

    
    const mailid = "elangkumaran290@gmail.com";
    let sender = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        logger: true,
        secureConnection: false,
        auth: {
            user: 'elangosingle246@gmail.com',
            pass: 'nbwk btvy kizm xbsq'
        },
        tls: {
            rejectUnauthorized: true
        }
    });

    let mail = {
        from: "elangosingle246@gmail.com",
        to: mailid,
        subject: "New Customer",
        text: "You has a new booking of a services  "+newUser.Name,
    };

   const mailsend = sender.sendMail(mail, function (error, info) {
        if (error) {
            console.log("error1111")
            console.log(error);
        } else {
            console.log("Email sent successfully: "
                + info.response);
        }
    });



    res.send(newUser);
    console.log(newUser);
});
app.post('/update', async (req, res) => {
    const id=req.body.selectedId
    const Status =req.body.selectedStatus
    const Email=req.body.Email
    console.log("Update request received:", id, Status);
const result = await userModel.updateOne(
            {"_id":id },
            { "Status":Status}
);
        if(Status ==="Delivery")
             {
             console.log("email"+Email);
    const mailid = Email;
    let sender = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        logger: true,
        secureConnection: false,
        auth: {
            user: 'elangosingle246@gmail.com',
            pass: 'nbwk btvy kizm xbsq'
        },
        tls: {
            rejectUnauthorized: true
        }
    });

    let mail = {
        from: "elangosingle246@gmail.com",
        to: mailid,
        subject: "details about your vehicle service",
        text: "form ek servises your vechicle service is complete come and collect your vechicle",
    };

   const mailsend = sender.sendMail(mail, function (error, info) {
        if (error) {
            console.log("error1111")
            console.log(error);
        } else {
            console.log("Email sent successfully: "
                + info.response);
        }
    });


        }
      
});


app.listen(3001,()=>
{
    console.log("surver is running in port 3001");
});