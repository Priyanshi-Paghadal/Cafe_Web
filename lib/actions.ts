"use server"

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Call our API route instead of using Nodemailer directly
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || "Failed to send email")
    }

    return result
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send your message. Please try again later.",
    }
  }
}
