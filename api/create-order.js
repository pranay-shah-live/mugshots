const { Cashfree, CFEnvironment } = require("cashfree-pg");

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, phone, name, email } = req.body;

    if (!amount) {
      return res.status(400).json({ error: 'Amount is required' });
    }

    const cashfree = new Cashfree(
      CFEnvironment.PRODUCTION,
      process.env.CASHFREE_APP_ID,
      process.env.CASHFREE_SECRET_KEY
    );

    const orderId = `MUG_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    const request = {
      order_amount: amount, // Cashfree expects amount in Rupees, not paise!
      order_currency: "INR",
      order_id: orderId,
      customer_details: {
        customer_id: `CUST_${Date.now()}`,
        customer_phone: phone || "9999999999",
        customer_email: email || "customer@example.com",
        customer_name: name || "Guest User"
      }
    };

    const response = await cashfree.PGCreateOrder(request);

    res.status(200).json({ 
      orderId: orderId,
      paymentSessionId: response.data.payment_session_id 
    });
  } catch (error) {
    console.error("Error creating Cashfree order:", error.response?.data || error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
