export async function sendWhatsAppMessage(phoneNumber: string, message: string) {
  try {
    console.log("Preparing WhatsApp message for:", phoneNumber);

    // Format the phone number to remove any non-numeric characters
    const formattedPhone = phoneNumber.replace(/\D/g, '');

    // Validate phone number (basic check for length and digits)
    if (formattedPhone.length < 10 || formattedPhone.length > 15) {
      throw new Error("Invalid phone number format");
    }

    // Create WhatsApp message URL with proper formatting
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;

    console.log("WhatsApp URL:", whatsappUrl);

    return {
      success: true,
      url: whatsappUrl,
      message: "WhatsApp URL generated successfully",
    };
  } catch (error) {
    console.error("Error preparing WhatsApp message:", error);
    return {
      success: false,
      url: null,
      message: `Failed to prepare WhatsApp message: ${error}`,
    };
  }
}