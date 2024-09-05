"use server";
import nodemailer from "nodemailer";

export const sendEmail = async ({ firstName, lastName, email, message }: { firstName: string, lastName: string, email: string, message: string }) => {
  // Create a transporter object with your email service configuration
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: "shanthibabu1999@gmail.com",
    subject: `New message from ${firstName} ${lastName}`,
    text: message,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Message sent successfully" };
  } catch (error) {
    return { success: false, message: "Error sending email", error };
  }
};
