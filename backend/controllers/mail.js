import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

// Function to send mail and handle response
async function sendMail(req, res) {
    const {
        mail,
        message,
        name
    } = req.body; // Destructure from req.body for cleaner code

    console.log("Received mail request:", req.body);
    if (!mail || !message || !name) {
        return res.status(400).send("Missing 'mail' or 'message' or 'name' in request body ");
    }

    try {
        // Send inquiry to your email
        const info = await transporter.sendMail({
            from: `"Portfolio Contact" <${mail}>`, // Use provided email as sender
            to: process.env.EMAIL_USER, // Your email to receive messages
            subject: "Portfolio Service Inquiry",
            html: `
                <div style="
                    background-color: #ffffff;
                    border: 1px solid #e0e0e0;
                    border-radius: 10px;
                    padding: 20px 30px;
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
                    font-family: Arial, sans-serif;
                    color: #333;
                    max-width: 600px;
                    margin: 20px auto;
                ">
                    <h2 style="
                        color: #0056b3;
                        font-size: 28px;
                        text-align: center;
                        margin: 0;
                        padding: 10px 0;
                    ">Service Inquiry from ${name}</h2>
                    
                    <p style="
                        font-size: 16px;
                        color: #666;
                        text-align: center;
                        margin-bottom: 30px;
                    ">You have received a new service inquiry through your portfolio. Here are the details:</p>
                    
                    <hr style="
                        border: none;
                        border-top: 1px solid #eaeaea;
                        margin: 15px 0;
                    ">
                    
                    <div style="
                        font-size: 16px;
                        line-height: 1.6;
                        color: #333;
                    ">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${mail}</p>
                        <p><strong>Message:</strong></p>
                        <p style="
                            background-color: #f7f7f7;
                            padding: 15px;
                            border-radius: 8px;
                            color: #444;
                        ">${message}</p>
                    </div>
                    
                    <hr style="
                        border: none;
                        border-top: 1px solid #eaeaea;
                        margin: 15px 0;
                    ">
                    
                    <footer style="
                        text-align: center;
                        font-size: 14px;
                        color: #999;
                        margin-top: 20px;
                    ">
                        <p style="
                            font-size: 14px;
                            color: #999;
                            margin-bottom: 5px;
                        ">Thank you for choosing our services. We will get back to you soon.</p>
                        <p style="font-size: 12px;">This is an automated email. Please do not reply directly to this message.</p>
                    </footer>
                </div>
            `
        });

        console.log("Inquiry sent to service provider:", info.messageId);

        // Send thank-you email to the client
        const thankYouInfo = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: mail,
            replyTo: process.env.EMAIL_USER, // Adds a verified 'reply-to' address
            subject: "Thank You for Your Inquiry",
            html: `
                <div style="
                    background-color: #f9f9f9;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                ">
                    <h2 style="color: #0073e6; text-align: center;">Thank You, ${name}!</h2>
                    <p style="font-size: 16px; text-align: center;">
                        We appreciate your inquiry and will be in touch soon. If you need immediate assistance, please reply to this email.
                    </p>
                    <p style="text-align: center;">Warm Regards,<br>Farman Ali</p>
                </div>
            `
        });


        console.log("Thank you message sent to client:", thankYouInfo.messageId);
        res.status(200).send("Email sent successfully");

    } catch (error) {
        console.error("Error sending email: ", error);
        res.status(500).send("Failed to send email");
    }
}

export default sendMail;