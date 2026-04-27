# QR Visitor Management System

A comprehensive QR code-based visitor management system for offices with frontend and backend components.

## Project Structure

```
QR-MANAGEMENT-PROJECT/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── .env
│
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   ├── models/
│   │   ├── Visitor.js
│   │   └── Admin.js
│   ├── routes/
│   ├── middleware/
│   │   └── auth.js
│   ├── utils/
│   │   ├── jwt.js
│   │   └── qrGenerator.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Access at: http://localhost:3000

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

Server runs on: http://localhost:5000

## Features

- ✅ QR Code Generation for Visitors
- ✅ Check-in/Check-out System
- ✅ Visitor Management
- ✅ Admin Dashboard
- ✅ JWT Authentication
- ✅ MongoDB Integration
- ✅ Responsive UI

## Technologies

**Frontend:**
- React 18
- Vite
- Axios
- React Router

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- QRCode

## License

MIT
