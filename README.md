🛒 E-Commerce Backend API

This is the backend server for an E-commerce web application. It provides RESTful APIs for handling users, products, cart, and orders.

🔗 GitHub Repo: https://github.com/Lokendraa12/E_commerce-Backend

🚀 Features

🔐 User Authentication (Register / Login)

🛍️ Product Management (CRUD operations)

🛒 Cart Management

📦 Order Management

👤 User Profile Handling

🔎 API-based data fetching for frontend

⚡ RESTful API architecture

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Authentication: JWT (JSON Web Token)

Environment Config: dotenv

API Testing: Postman

📂 Project Structure
E_commerce-Backend/
│── controllers/      # Business logic
│── models/           # Database schemas
│── routes/           # API routes
│── middleware/       # Auth & error handling
│── config/           # DB and environment config
│── utils/            # Helper functions
│── server.js         # Entry point
│── package.json
⚙️ Installation & Setup

Follow these steps to run the backend locally:

# Clone the repository
git clone https://github.com/Lokendraa12/E_commerce-Backend.git

# Go to project folder
cd E_commerce-Backend

# Install dependencies
npm install

# Run the server
npm start
🔑 Environment Variables

Create a .env file in the root directory and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
📡 API Endpoints (Example)
Auth Routes

POST /api/auth/register → Register user

POST /api/auth/login → Login user

Product Routes

GET /api/products → Get all products

POST /api/products → Add product

PUT /api/products/:id → Update product

DELETE /api/products/:id → Delete product

Cart Routes

POST /api/cart → Add to cart

GET /api/cart → Get cart items

Order Routes

POST /api/orders → Create order

GET /api/orders → Get user orders

🧪 Testing

You can test APIs using:

Postman

Thunder Client (VS Code extension)

🔗 Frontend Integration

This backend is connected with your frontend project:

👉 https://e-commerce-frontend-rose-omega.vercel.app/

📌 Future Improvements

💳 Payment Gateway Integration (Razorpay / Stripe)

⭐ Product Reviews & Ratings

📊 Admin Dashboard

❤️ Wishlist Feature

📈 Analytics & Reports

👨‍💻 Author

Lokendra Kushwah

📄 License

This project is licensed under the MIT License.
