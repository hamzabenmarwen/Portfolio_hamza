import emailjs from '@emailjs/browser'

// Initialize EmailJS with your Public Key from emailjs.com
// Get it from: https://dashboard.emailjs.com/admin/account
emailjs.init('YOUR_PUBLIC_KEY_HERE')

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID_HERE',     // From Email Services section
      'YOUR_TEMPLATE_ID_HERE',    // From Email Templates section
      {
        to_email: 'hamzabenmarwen@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }
    )
    return response
  } catch (error) {
    console.error('EmailJS error:', error)
    throw error
  }
}
