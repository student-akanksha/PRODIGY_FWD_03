# E-commerce Website

A modern e-commerce website built with Flask and MySQL.

## Features

- User authentication (login/register)
- Product browsing and searching
- Shopping cart functionality
- Order management
- Responsive design
- Category-based filtering
- Product details with images
- Size and color selection for fashion items

## Prerequisites

- Python 3.8+
- MySQL 8.0+
- pip (Python package manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecommerce-website
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a MySQL database:
```sql
CREATE DATABASE ecommerce;
```

5. Configure environment variables:
- Copy `.env.example` to `.env`
- Update the database URL and secret key in `.env`

6. Initialize the database:
```bash
python init_db.py
```

## Running the Application

1. Start the Flask development server:
```bash
flask run
```

2. Open your browser and navigate to:
```
http://localhost:5000
```

## Project Structure

```
ecommerce-website/
├── app.py              # Main application file
├── init_db.py          # Database initialization script
├── requirements.txt    # Python dependencies
├── .env               # Environment variables
├── static/            # Static files (CSS, JS, images)
│   ├── css/
│   ├── js/
│   └── images/
└── templates/         # HTML templates
    ├── index.html
    ├── item-detail.html
    ├── login.html
    └── register.html
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products?category=<category>` - Get products by category
- `GET /product/<id>` - Get product details

### Cart
- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add item to cart
- `DELETE /api/cart` - Remove item from cart

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order

### Authentication
- `POST /login` - User login
- `POST /register` - User registration
- `GET /logout` - User logout

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.