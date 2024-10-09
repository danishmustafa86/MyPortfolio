import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., Gmail or other email service provider
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail account
        pass: process.env.GMAIL_PASS, // Your Gmail app password or email password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: 'danishjajja86@gmail.com', // Change to the email address where you want to receive submissions
      subject: `Contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error.message, error.stack);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}
