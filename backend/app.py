from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import os
from dotenv import load_dotenv
import razorpay
import json

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Initialize Razorpay client
razorpay_client = razorpay.Client(
    auth=('rzp_test_4m122CsSYPYere','IOvm1alZWqguhhWOR2551D0O')
)

# Database connection helper
DB_CONFIG = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'ecommerce_db',
    'auth_plugin': 'mysql_native_password'
}

def get_db_connection():
    return mysql.connector.connect(**DB_CONFIG)

# Routes
@app.route('/api/products', methods=['GET'])
def get_products():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM products')
    products = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(products)

@app.route('/api/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM products WHERE id = %s', (product_id,))
    product = cursor.fetchone()
    cursor.close()
    conn.close()
    if not product:
        return jsonify({'error': 'Product not found'}), 404
    return jsonify(product)

@app.route('/api/products', methods=['POST'])
def create_product():
    data = request.json
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        'INSERT INTO products (name, description, price, image_url, category) VALUES (%s, %s, %s, %s, %s)',
        (data['name'], data['description'], data['price'], data.get('image_url'), data.get('category'))
    )
    conn.commit()
    product_id = cursor.lastrowid
    cursor.close()
    conn.close()
    return jsonify({'message': 'Product created successfully', 'id': product_id}), 201

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM users WHERE email = %s', (data['email'],))
    if cursor.fetchone():
        cursor.close()
        conn.close()
        return jsonify({'error': 'Email already registered'}), 400
    cursor.execute(
        'INSERT INTO users (username, email, password) VALUES (%s, %s, %s)',
        (data['username'], data['email'], data['password'])
    )
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/api/orders', methods=['POST'])
def create_order():
    data = request.json
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    
    # First verify if the user exists
    cursor.execute('SELECT id FROM users WHERE id = %s', (data['user_id'],))
    user = cursor.fetchone()
    
    if not user:
        cursor.close()
        conn.close()
        return jsonify({'error': 'User not found'}), 404
    
    # If user exists, create the order
    cursor.execute(
        'INSERT INTO orders (user_id, total_amount, orderId) VALUES (%s, %s, %s)',
        (data['user_id'], data['total_amount'], data['orderId'])
    )
    conn.commit()
    print(cursor)
    order_id = cursor.lastrowid
    cursor.close()
    conn.close()
    return jsonify({'message': 'Order created successfully', 'id': order_id}), 201

@app.route('/api/create-payment', methods=['POST'])
def create_payment():
    try:
        data = request.json
        amount = int(float(data['amount']) * 100)  # Convert to paise
        print(amount)
        # Create Razorpay order
        payment = razorpay_client.order.create({
            'amount': amount,
            'currency': 'INR',
            'payment_capture': 1,
            'notes': {
                'order_id': data.get('order_id', ''),
                'user_id': data.get('user_id', '')
            }
        })
        print(payment)
        return jsonify({
            'id': payment['id'],
            'amount': payment['amount'],
            'currency': payment['currency'],
            'key': 'rzp_test_4m122CsSYPYere'
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/api/verify-payment', methods=['POST'])
def verify_payment():
    try:
        data = request.json
        params_dict = {
            'razorpay_payment_id': data['razorpay_payment_id'],
            'razorpay_order_id': data['razorpay_order_id'],
            'razorpay_signature': data['razorpay_signature']
        }
        
        # Verify the payment signature
        razorpay_client.utility.verify_payment_signature(params_dict)
        
        # Update order status in database
        try:
            with get_db_connection() as conn:
                with conn.cursor() as cursor:
                    cursor.execute(
                        'UPDATE orders SET status = %s WHERE orderId = %s',
                        ('completed', data['order_id'])
                    )
                    conn.commit()
        except mysql.connector.Error as err:
            return jsonify({'error': f'Database error: {str(err)}'}), 500

        return jsonify({'status': 'success', 'message': 'Payment verified successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True) 