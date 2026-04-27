# 🔌 API DOCUMENTATION

## Base URL

```
Development: http://localhost:5000/api/v1
Production: https://qr-management-api.com/api/v1
```

---

## Authentication

### JWT Token
All protected endpoints require JWT token in Authorization header:

```
Authorization: Bearer <token>
```

### Token Generation
Tokens are generated after:
1. Admin registration
2. Admin login

Token valid for: **7 days**

---

## Error Responses

### Standard Error Format
```json
{
  "message": "Error description",
  "code": "ERROR_CODE",
  "statusCode": 400
}
```

### HTTP Status Codes
| Code | Meaning |
|------|---------|
| 200 | OK - Success |
| 201 | Created - Resource created |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Missing/invalid token |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 500 | Server Error - Internal issue |

---

## Authentication Endpoints

### 1. Admin Registration

**Endpoint:** `POST /auth/register`

**Public:** Yes  
**Authentication:** No

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePassword123"
}
```

**Request Example:**
```bash
curl -X POST http://localhost:5000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "SecurePassword123"
  }'
```

**Success Response (201):**
```json
{
  "message": "Admin registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Response (400):**
```json
{
  "message": "Admin already exists"
}
```

---

### 2. Admin Login

**Endpoint:** `POST /auth/login`

**Public:** Yes  
**Authentication:** No

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "SecurePassword123"
}
```

**Request Example:**
```bash
curl -X POST http://localhost:5000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "SecurePassword123"
  }'
```

**Success Response (200):**
```json
{
  "message": "Logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "receptionist"
  }
}
```

**Error Response (401):**
```json
{
  "message": "Invalid credentials"
}
```

---

### 3. Get Admin Profile

**Endpoint:** `GET /auth/me`

**Public:** No  
**Authentication:** Required

**Request Example:**
```bash
curl -X GET http://localhost:5000/api/v1/auth/me \
  -H "Authorization: Bearer <token>"
```

**Success Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "receptionist",
  "isActive": true,
  "createdAt": "2026-04-27T10:00:00.000Z",
  "updatedAt": "2026-04-27T10:00:00.000Z"
}
```

---

## Visitor Endpoints

### 1. Register Visitor

**Endpoint:** `POST /visitors/register`

**Public:** Yes  
**Authentication:** No

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "9876543210",
  "company": "XYZ Corporation",
  "purpose": "Business Meeting",
  "hostName": "John Doe"
}
```

**Request Example:**
```bash
curl -X POST http://localhost:5000/api/v1/visitors/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "9876543210",
    "company": "XYZ Corporation",
    "purpose": "Business Meeting",
    "hostName": "John Doe"
  }'
```

**Success Response (201):**
```json
{
  "message": "Visitor registered successfully",
  "visitor": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "9876543210",
    "company": "XYZ Corporation",
    "purpose": "Business Meeting",
    "hostName": "John Doe",
    "qrCode": "data:image/png;base64,iVBORw0KGgo...",
    "status": "pending",
    "createdAt": "2026-04-27T10:30:00.000Z",
    "updatedAt": "2026-04-27T10:30:00.000Z"
  }
}
```

---

### 2. Get All Visitors

**Endpoint:** `GET /visitors`

**Public:** No  
**Authentication:** Required

**Query Parameters:**
- `status` (optional) - Filter by status: pending, checked-in, checked-out
- `page` (optional) - Pagination (default: 1)
- `limit` (optional) - Records per page (default: 20)

**Request Example:**
```bash
# Get all visitors
curl -X GET http://localhost:5000/api/v1/visitors \
  -H "Authorization: Bearer <token>"

# Get checked-in visitors
curl -X GET "http://localhost:5000/api/v1/visitors?status=checked-in" \
  -H "Authorization: Bearer <token>"
```

**Success Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "9876543210",
    "company": "XYZ Corporation",
    "purpose": "Business Meeting",
    "hostName": "John Doe",
    "status": "checked-in",
    "checkInTime": "2026-04-27T10:35:00.000Z",
    "checkOutTime": null,
    "createdAt": "2026-04-27T10:30:00.000Z",
    "updatedAt": "2026-04-27T10:35:00.000Z"
  }
]
```

---

### 3. Get Visitor by ID

**Endpoint:** `GET /visitors/:id`

**Public:** No  
**Authentication:** Required

**Path Parameters:**
- `id` - Visitor MongoDB ObjectId

**Request Example:**
```bash
curl -X GET http://localhost:5000/api/v1/visitors/507f1f77bcf86cd799439012 \
  -H "Authorization: Bearer <token>"
```

**Success Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "9876543210",
  "company": "XYZ Corporation",
  "purpose": "Business Meeting",
  "hostName": "John Doe",
  "qrCode": "data:image/png;base64,iVBORw0KGgo...",
  "status": "checked-in",
  "checkInTime": "2026-04-27T10:35:00.000Z",
  "checkOutTime": null,
  "createdAt": "2026-04-27T10:30:00.000Z",
  "updatedAt": "2026-04-27T10:35:00.000Z"
}
```

**Error Response (404):**
```json
{
  "message": "Visitor not found"
}
```

---

### 4. Check-In Visitor

**Endpoint:** `PUT /visitors/:id/check-in`

**Public:** No  
**Authentication:** Required

**Path Parameters:**
- `id` - Visitor MongoDB ObjectId

**Request Body:** (Empty)

**Request Example:**
```bash
curl -X PUT http://localhost:5000/api/v1/visitors/507f1f77bcf86cd799439012/check-in \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json"
```

**Success Response (200):**
```json
{
  "message": "Checked in successfully",
  "visitor": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Jane Smith",
    "status": "checked-in",
    "checkInTime": "2026-04-27T10:35:00.000Z",
    "updatedAt": "2026-04-27T10:35:00.000Z"
  }
}
```

---

### 5. Check-Out Visitor

**Endpoint:** `PUT /visitors/:id/check-out`

**Public:** No  
**Authentication:** Required

**Path Parameters:**
- `id` - Visitor MongoDB ObjectId

**Request Body:** (Empty)

**Request Example:**
```bash
curl -X PUT http://localhost:5000/api/v1/visitors/507f1f77bcf86cd799439012/check-out \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json"
```

**Success Response (200):**
```json
{
  "message": "Checked out successfully",
  "visitor": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Jane Smith",
    "status": "checked-out",
    "checkOutTime": "2026-04-27T11:45:00.000Z",
    "updatedAt": "2026-04-27T11:45:00.000Z"
  }
}
```

---

## Health Check

**Endpoint:** `GET /health`

**Public:** Yes  
**Authentication:** No

**Request Example:**
```bash
curl http://localhost:5000/health
```

**Success Response (200):**
```json
{
  "status": "Server is running",
  "timestamp": "2026-04-27T10:00:00.000Z"
}
```

---

## Data Models

### Admin Model
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (default: "receptionist"),
  isActive: Boolean (default: true),
  createdAt: Date,
  updatedAt: Date
}
```

### Visitor Model
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required),
  phone: String (required),
  company: String,
  purpose: String (required),
  hostName: String (required),
  qrCode: String,
  status: String (enum: ['pending', 'checked-in', 'checked-out']),
  checkInTime: Date,
  checkOutTime: Date,
  createdAt: Date,
  updatedAt: Date
}
```

---

## Rate Limiting (Future)

Planned rate limiting:
- 100 requests per minute per IP
- 1000 requests per hour per user

---

## API Versioning

**Current Version:** v1  
**Path:** `/api/v1/...`

Future versions will maintain backward compatibility:
- `/api/v2/...` (planned)
- `/api/v3/...` (planned)

---

## Common Use Cases

### Use Case 1: Complete Visitor Journey

```bash
# 1. Register visitor
curl -X POST http://localhost:5000/api/v1/visitors/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane","email":"jane@example.com",...}'

# 2. Admin logs in
curl -X POST http://localhost:5000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"..."}'

# 3. Admin checks in visitor
curl -X PUT http://localhost:5000/api/v1/visitors/ID/check-in \
  -H "Authorization: Bearer <token>"

# 4. Admin checks out visitor
curl -X PUT http://localhost:5000/api/v1/visitors/ID/check-out \
  -H "Authorization: Bearer <token>"

# 5. Get visitor history
curl -X GET http://localhost:5000/api/v1/visitors \
  -H "Authorization: Bearer <token>"
```

---

## Testing the API

### Using Postman

1. Import collection from `/api/postman-collection.json`
2. Set environment variable: `base_url=http://localhost:5000/api/v1`
3. Set token after login
4. Run requests

### Using curl

See examples above for curl commands.

---

**Last Updated:** 27th April 2026  
**API Version:** v1  
**Status:** Production Ready
