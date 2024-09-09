"use server";
import nodemailer from "nodemailer";

export const sendEmail = async ({
  firstName,
  lastName,
  email = null,
  message,
  isFromContact = false,
}: {
  firstName: string;
  lastName: string;
  email: string | null;
  message: string;
  isFromContact: boolean;
}) => {
  // Create a transporter object with your email service configuration
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "reach.shanthi.babu@gmail.com",
      pass: "ozimwzlntoxctoie",
    },
  });

  // Email options
  const mailOptions = {
    from: "reach.shanthi.babu@gmail.com",
    to: "shanthibabu1999@gmail.com",
    subject: `New Message From Contact Me Form [Portfolio] -${firstName} ${lastName}`,
    text: isFromContact
      ? `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
        }
        .message-body {
            margin: 20px;
        }
    </style>
</head>
<body>
    <div class="message-body">
        <p>Hello,</p>
        <p>You have received a new message from your contact form:</p>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong>${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p>Best Regards,<br>Reach Shanthi</p>
    </div>
</body>
</html>
`
      : message,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Message sent successfully" };
  } catch (error) {
    console.log("error....", error);
    return { success: false, message: "Error sending email", error };
  }
};
