# Personal Finance Manager

A full-stack MERN (MongoDB, Express, React, Node.js) web application designed to help users analyze and track their expenses, savings, and overall financial health.

## Features

- 🔹 **User Authentication** (JWT-based secure login/signup)
- 💰 **Expense Tracking** (Categorize and visualize expenses)
- 📊 **Savings Analysis** (Monitor and set savings goals)
- 📈 **Financial Reports** (Graphs and insights on spending habits)
- 📅 **Budget Planning** (Set monthly budgets and get alerts)
- 🔔 **Notifications & Reminders** (Bill due alerts and savings reminders)
- 🌙 **Dark/Light Mode** (User-friendly UI with theme options)
- 📲 **Mobile Responsive** (Optimized for all screen sizes)

## Tech Stack

- **Frontend:** React.js, Redux, Chakra UI/Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT (JSON Web Token)
- **State Management:** Redux Toolkit / Context API
- **Charts & Visualization:** Chart.js / Recharts
- **Deployment:** Vercel / Netlify (Frontend), Render / Railway (Backend)

## Installation

### Prerequisites
Make sure you have **Node.js** and **MongoDB** installed on your machine.

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/finance-manager.git
   cd finance-manager
   ```
2. Install dependencies for frontend and backend:
   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the `server` directory and add:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     PORT=5000
     ```
4. Start the development servers:
   ```sh
   # Start backend
   cd server
   npm run dev
   
   # Start frontend
   cd ../client
   npm start
   ```
5. Open the application in your browser at `http://localhost:3000`

## API Endpoints

| Method | Endpoint          | Description               |
|--------|------------------|---------------------------|
| POST   | `/api/auth/signup`  | Register a new user       |
| POST   | `/api/auth/login`   | Authenticate user         |
| GET    | `/api/expenses`     | Fetch user expenses       |
| POST   | `/api/expenses/add` | Add a new expense         |
| DELETE | `/api/expenses/:id` | Delete an expense         |
| GET    | `/api/savings`      | Get user savings details  |

## Contribution

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any inquiries or feature requests, feel free to reach out:

📧 Email: your-email@example.com  
🐦 Twitter: [@your_handle](https://twitter.com/your_handle)  
💼 LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

