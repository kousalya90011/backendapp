const nodemailer = require('nodemailer');
const sellerorders = require('./controllers/sellerorders');

const gmailTransporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'kousalya90909@gmail.com', // Gmail id
        pass: 'ewqi ygsm ewpl lrny' // App password
    }
});

const sendEmails = async () => {
    try {
        const emails = await sellerorders.emails(); // retrieve emails from sellerorders module
        // Iterate over each email address and send an email
        for (const email of emails) {
            const mailOptions = {
                from: 'kousalya90909@gmail.com',
                to: email,
                subject: 'Your order is placed',
                html: '<font color=green>Thank you for placing an order in Feast Express </font>'
            };

            await gmailTransporter.sendMail(mailOptions);
            console.log(`Email sent successfully to ${email}`);
        }
    } catch (error) {
        console.error('Error sending email through Gmail:', error.message);
    }
};

sendEmails();
