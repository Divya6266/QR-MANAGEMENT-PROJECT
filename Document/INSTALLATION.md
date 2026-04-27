# 🚀 INSTALLATION & SETUP GUIDE

## Prerequisites

Before installing, ensure you have:

### Required Software
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v9 or higher) - Comes with Node.js
- **MongoDB** (v5 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **Git** (v2 or higher) - [Download](https://git-scm.com/)
- **Code Editor** - VS Code recommended - [Download](https://code.visualstudio.com/)

### System Requirements
- RAM: Minimum 4GB (8GB recommended)
- Storage: 2GB free space
- OS: Windows, macOS, or Linux
- Internet connection for package downloads

---

## Installation Steps

### Step 1: Clone or Extract Project

#### Option A: From Git
```bash
git clone https://github.com/Divya6266/QR-MANAGEMENT-PROJECT.git
cd QR-MANAGEMENT-PROJECT
```

#### Option B: From Zip File
```bash
# Extract zip file
# Open terminal in extracted folder
cd QR-MANAGEMENT-PROJECT
```

---

### Step 2: Backend Setup

#### 2.1 Navigate to Backend Directory
```bash
cd backend
```

#### 2.2 Install Dependencies
```bash
npm install
```

Expected output:
```
added 168 packages in 12s
```

#### 2.3 Create Environment File
Create `.env` file in backend folder with:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://localhost:27017/qr-visitor-management
DB_NAME=qr-visitor-management

# JWT Configuration
JWT_SECRET=your_secure_jwt_secret_key_here
JWT_EXPIRE=7d

# API Configuration
API_PREFIX=/api/v1
FRONTEND_URL=http://localhost:3001
```

**Important:** Replace `JWT_SECRET` with a strong random key!

#### 2.4 Verify Backend Files
Check if these files exist:
```
backend/
├── server.js ✓
├── package.json ✓
├── .env ✓
├── config/database.js ✓
├── controllers/authController.js ✓
├── controllers/visitorController.js ✓
├── models/Admin.js ✓
├── models/Visitor.js ✓
├── routes/auth.js ✓
├── routes/visitors.js ✓
├── middleware/auth.js ✓
└── utils/ ✓
```

---

### Step 3: Frontend Setup

#### 3.1 Navigate to Frontend Directory
```bash
# Go back to root first
cd ..

# Then enter frontend
cd frontend
```

#### 3.2 Install Dependencies
```bash
npm install
```

Expected output:
```
added 89 packages in 14s
```

#### 3.3 Create Environment File
Create `.env` file in frontend folder with:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=QR Visitor Management
```

#### 3.4 Verify Frontend Files
Check if these files exist:
```
frontend/
├── src/
│   ├── App.jsx ✓
│   ├── main.jsx ✓
│   ├── components/ ✓
│   ├── pages/ ✓
│   ├── services/api.js ✓
│   └── styles/ ✓
├── public/index.html ✓
├── index.html ✓
├── package.json ✓
├── vite.config.js ✓
└── .env ✓
```

---

### Step 4: MongoDB Setup

#### Option A: Local MongoDB

**Windows:**
```bash
# Download MongoDB from https://www.mongodb.com/try/download/community
# Run installer and follow setup
# MongoDB runs on port 27017
```

**macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
sudo apt-get update
sudo apt-get install -y mongodb
sudo systemctl start mongodb
```

#### Option B: MongoDB Cloud (Atlas)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Update `.env` with connection string:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/qr-visitor-management
```

#### Verify MongoDB Connection
```bash
# Test connection
mongo mongodb://localhost:27017/qr-visitor-management
```

---

## Running the Application

### Method 1: Two Separate Terminals

#### Terminal 1 - Backend
```bash
cd backend
npm run dev
```

Expected output:
```
Server running on port 5000
MongoDB Connected: localhost
[nodemon] watching path(s): *.*
```

#### Terminal 2 - Frontend (New Terminal)
```bash
cd frontend
npm run dev
```

Expected output:
```
VITE v5.4.21 ready in 334 ms
➜  Local:   http://localhost:3001/
```

### Method 2: Using VS Code Integrated Terminal

1. Open project in VS Code
2. Split terminal: Ctrl + Shift + `
3. In one terminal: `cd backend && npm run dev`
4. In other terminal: `cd frontend && npm run dev`

---

## Accessing the Application

### Browser Access

#### Public Pages (No Login)
- **Visitor Registration:** http://localhost:3001/visitor
- **Admin Login:** http://localhost:3001/login
- **Admin Register:** http://localhost:3001/register

#### Protected Pages (Requires Login)
- **Dashboard:** http://localhost:3001/dashboard
- **History:** http://localhost:3001/history

---

## First Time Setup

### Step 1: Register Admin Account

1. Go to http://localhost:3001/register
2. Fill in details:
   - Name: Your Name
   - Email: your@email.com
   - Password: Password123
   - Confirm: Password123
3. Click "Register"
4. Auto-logged in to dashboard

### Step 2: Register a Visitor

1. Go to http://localhost:3001/visitor
2. Fill visitor form:
   - Full Name: John Doe
   - Email: john@example.com
   - Phone: 9876543210
   - Company: ABC Corp
   - Purpose: Meeting
   - Host Name: Your Name
3. Click "Generate QR Code"
4. QR Code displayed!

### Step 3: Dashboard Operations

1. Go to http://localhost:3001/dashboard (Auto-redirected if logged in)
2. See statistics:
   - Total Visitors: 1
   - Checked In: 0
   - Checked Out: 0
3. Click "Check In" button for visitor
4. Stats update automatically!

---

## Troubleshooting

### Port Already in Use

**Error:** "Port 3001 already in use"

**Solution:**
```bash
# Find process using port
netstat -ano | findstr :3001

# Kill process
taskkill /PID <ProcessID> /F

# Or use different port in vite.config.js
# Change port: 3000 to port: 3002
```

### MongoDB Connection Error

**Error:** "Failed to connect to MongoDB"

**Solution:**
1. Check MongoDB is running
2. Verify connection string in `.env`
3. Check credentials if using Atlas
4. Firewall settings if using cloud

### Dependencies Installation Failed

**Error:** "npm ERR! code E404"

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules

# Delete package-lock.json
rm package-lock.json

# Reinstall
npm install
```

### CORS Error in Browser

**Error:** "Access to XMLHttpRequest blocked by CORS"

**Solution:**
1. Check backend has CORS enabled in server.js
2. Verify frontend URL in .env
3. Restart both servers

### Vite Hot Module Replacement Issues

**Error:** "Cannot find module"

**Solution:**
```bash
cd frontend
rm -rf node_modules
npm install
npm run dev
```

---

## Verification Checklist

### Backend Checklist
- [ ] MongoDB running
- [ ] Backend dependencies installed
- [ ] `.env` file created
- [ ] `npm run dev` shows "Server running on port 5000"
- [ ] Health check: http://localhost:5000/health returns JSON

### Frontend Checklist
- [ ] Frontend dependencies installed
- [ ] `.env` file created
- [ ] `npm run dev` shows "http://localhost:3001/"
- [ ] Browser opens without errors
- [ ] Purple header visible

### Integration Checklist
- [ ] Can register admin
- [ ] Can login as admin
- [ ] Can register visitor
- [ ] QR code generates
- [ ] Dashboard shows data
- [ ] Check-in/Check-out works

---

## Development Commands

### Backend Commands
```bash
# Start development server
npm run dev

# Start production server
npm start

# Run tests (when implemented)
npm test
```

### Frontend Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Environment Setup

### Development
- Node Env: development
- Debug Logs: Enabled
- Hot Reload: Enabled
- CORS: Enabled

### Production (Future)
- Node Env: production
- Debug Logs: Disabled
- Hot Reload: Disabled
- CORS: Restricted

---

## IDE Configuration

### VS Code Extensions Recommended
- ES7+ React/Redux/React-Native snippets
- ES Lint
- Prettier - Code formatter
- REST Client
- MongoDB for VS Code

### VS Code Settings
Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

---

## Deployment Preparation

### Before Deployment
1. Update `.env` with production values
2. Build frontend: `npm run build`
3. Test production build locally
4. Update MongoDB connection string
5. Enable CORS for production domain

### Deployment Options
- **Backend:** Heroku, AWS, DigitalOcean
- **Frontend:** Vercel, Netlify, GitHub Pages
- **Database:** MongoDB Atlas

---

## Next Steps

1. ✅ Installation complete
2. → Test all features
3. → Review API Documentation
4. → Read User Guide
5. → Prepare demo video
6. → Submit project

---

**Installation Time:** ~15-20 minutes  
**Last Updated:** 27th April 2026
