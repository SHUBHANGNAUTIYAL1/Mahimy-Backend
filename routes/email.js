import  express from "express";
import nodemailer from "nodemailer"


const router=express.Router();
router.use(express.json());

router.post('/send-email', async (req, res) => {
    try {
        const  {First,Last,Phone,Email,Topic,Message}  = req.body; // Assuming the request body contains 'emailContent'
        console.log(Email);
        await sendMail({First,Last,Phone,Email,Topic,Message}); // Call the sendMail function with email content
        res.send('Email sent successfully');
    } catch (error) {
        res.status(500).send('Failed to send email');
    }
});

// Function to send email
async function sendMail({First,Last,Phone,Email,Topic,Message}) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shubhang999454@gmail.com',
            pass: 'scvvqtqaabzhhaun'
        }
    });

    const mailOptions = {
        from: 'shubhang999454@gmail.com',
        to:'nautiyalshubhang@gmail.com',
        subject: `Contact details of ${First} ${Last}`,
        text:`First Name : ${First} ,  Last Name : ${Last} , Phone : ${Phone} , Email : ${Email} , Topic : ${Topic}  , Messages: ${Message}`, // Use the provided email content here
    };

    await transporter.sendMail(mailOptions); // Send email
    console.log('Email sent successfully');
}





export default router