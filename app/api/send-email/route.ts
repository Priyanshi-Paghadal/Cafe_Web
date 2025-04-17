import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, message } = data

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Email content
    const subject = `New Contact Form Submission from ${name}`
    const emailContent = `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `

    // Log the email details (for debugging in preview)
    console.log("Email would be sent with the following details:")
    console.log("To:", "techocean44@gmail.com")
    console.log("Subject:", subject)
    console.log("Content:", emailContent)

    // In a real environment, you would send the email here
    // For now, we'll simulate a successful email send

    // In production, you would use something like:
    /*
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: 'techocean44@gmail.com' }] }],
        from: { email: process.env.EMAIL_USER },
        subject: subject,
        content: [{ type: 'text/plain', value: emailContent }],
      }),
    });
    */

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send your message. Please try again later." },
      { status: 500 },
    )
  }
}
