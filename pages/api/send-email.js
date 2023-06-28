import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bewketutadesse1@gmail.com",
        pass: "Bewketu@321DROP",
      },
    });
    const { name, email, message } = req.body;
    const mailOptions = {
      from: email,
      to: "bewketutadesse1@gmail.com",
      subject: `Message from ${name}`,
      text: message,
    };
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "There was an error sending the email" });
    }
  } else {
    res.status(405).send("Method not allowed");
  }
}
