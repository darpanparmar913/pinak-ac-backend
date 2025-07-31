const nodemailer = require("nodemailer");
const moment = require("moment");


const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  
const bookingDate = moment().format("MMMM Do YYYY, h:mm A");

  const mailOptions = {
    from: process.env.TO_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "New AC Service Booking",
    html: `
     <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
      <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; border: 1px solid #ddd;">
        <div style="background: #030637; padding: 20px;">
          <h2 style="color: white; margin: 0;">New AC Service Booking</h2>
          <p style="color: #f9f9f9; margin: 5px 0;">📅 ${bookingDate}</p>
        </div>

        <div style="padding: 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold;">👤 Full Name</td>
              <td style="padding: 10px;">${data.fullName}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold;">📞 Mobile</td>
              <td style="padding: 10px;">${data.mobileNumber}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">🏠 Address</td>
              <td style="padding: 10px;">${data.address}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold;">❄️ AC Type</td>
              <td style="padding: 10px;">${data.acType}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">⚠️ Problem Summary</td>
              <td style="padding: 10px;">${data.problemSummary}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold;">💰 Payment Method</td>
              <td style="padding: 10px;">${data.paymentMethod}</td>
            </tr>
          </table>
        </div>

        <div style="background: #f0f0f0; padding: 15px; text-align: center; font-size: 14px; color: #555;">
          You received this email because a user booked a service from your website.
        </div>
      </div>
    </div>
    `,
  };

  // await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
