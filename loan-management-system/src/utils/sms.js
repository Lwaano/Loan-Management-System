import AfricasTalking from 'africastalking'

const credentials = {
  apiKey: 'YOUR_API_KEY',    // Get from Zambian provider
  username: 'YOUR_USERNAME'  // e.g., sandbox for testing
}

const africastalking = AfricasTalking(credentials)

export const sendSMS = async (phone, message) => {
  try {
    await africastalking.SMS.send({
      to: phone,
      message: message,
      from: 'YOUR_SHORTCODE' // Zambian approved shortcode
    })
    return true
  } catch (error) {
    console.error('SMS Error:', error)
    return false
  }
}