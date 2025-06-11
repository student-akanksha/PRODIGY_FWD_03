// Initialize Razorpay
function initializeRazorpay() {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
}

// Create order
async function createOrder(userId, amount, orderId) {
    try {
        const response = await fetch('http://localhost:5000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                total_amount: amount,
                user_id: userId,
                orderId
            })
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating payment:', error);
        throw error;
    }
}

// Create payment
async function createPayment(amount, orderId, userId) {
    try {
        const response = await fetch('http://localhost:5000/api/create-payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: amount,
                order_id: orderId,
                user_id: userId
            })
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating payment:', error);
        throw error;
    }
}

// Verify payment
async function verifyPayment(paymentData) {
    try {
        const response = await fetch('http://localhost:5000/api/verify-payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData)
        });
        return await response.json();
    } catch (error) {
        console.error('Error verifying payment:', error);
        throw error;
    }
}

// Process payment
async function processPayment(amount, orderId, userId) {
    try {
        // Initialize Razorpay
        const res = await initializeRazorpay();
        debugger
        if (!res) {
            alert('Razorpay SDK failed to load');
            return;
        }

        // Create payment
        const paymentData = await createPayment(amount, orderId, userId);
        debugger
        const orderdetails = await createOrder(userId, amount, orderId);
        debugger
        // Configure Razorpay options
        const options = {
            key: paymentData.key,
            amount: paymentData.amount,
            currency: paymentData.currency,
            name: 'Your Store Name',
            description: 'Payment for Order #' + orderId,
            order_id: paymentData.id,
            handler: async function (response) {
                try {
                    // Verify payment
                    const verificationData = {
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature,
                        order_id: orderId
                    };
                    
                    const verificationResult = await verifyPayment(verificationData);
                    if (verificationResult.status === 'success') {
                        alert('Payment successful!');
                        // Redirect to success page or update UI
                        // window.location.href = '/success.html';
                    } else {
                        alert('Payment verification failed');
                    }
                } catch (error) {
                    console.error('Payment verification error:', error);
                    alert('Payment verification failed');
                }
            },
            prefill: {
                name: 'Test User',
                email: 'test@example.com',
                contact: '9999999999'
            },
            theme: {
                color: '#3399cc'
            },
            modal: {
                ondismiss: function() {
                    alert('Payment cancelled');
                }
            }
        };

        // Create Razorpay instance
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    } catch (error) {
        console.error('Payment processing error:', error);
        alert('Payment processing failed');
    }
}

// Example usage:
// processPayment(1000, 'ORDER_123', 'USER_456'); 