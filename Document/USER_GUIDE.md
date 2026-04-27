# 👥 USER GUIDE

## Table of Contents
1. [Getting Started](#getting-started)
2. [Visitor Registration](#visitor-registration)
3. [Admin Setup](#admin-setup)
4. [Dashboard Usage](#dashboard-usage)
5. [Visitor Management](#visitor-management)
6. [History & Reports](#history--reports)
7. [FAQs](#faqs)
8. [Troubleshooting](#troubleshooting)

---

## Getting Started

### First Time Users

**3 Easy Steps:**

1. **Register as Admin** - Create your account
2. **Register Visitors** - Collect visitor information
3. **Manage Visits** - Track check-in/check-out

### System URLs

| Purpose | URL | Requires Login |
|---------|-----|----------------|
| Public Visitor Form | http://localhost:3001/visitor | ❌ No |
| Admin Login | http://localhost:3001/login | ❌ No |
| Create Admin Account | http://localhost:3001/register | ❌ No |
| Dashboard | http://localhost:3001/dashboard | ✅ Yes |
| Visitor History | http://localhost:3001/history | ✅ Yes |

---

## Visitor Registration

### How to Register a Visitor

**Location:** http://localhost:3001/visitor

**Who can use:** Anyone (No login required)

### Step-by-Step Guide

#### Step 1: Open Registration Form
- Navigate to: http://localhost:3001/visitor
- You'll see the public visitor registration form

#### Step 2: Fill Visitor Information
```
┌─────────────────────────────────┐
│  VISITOR REGISTRATION FORM      │
├─────────────────────────────────┤
│ Full Name *        [_________]  │  <- Required
│                                 │
│ Email *            [_________]  │  <- Required
│                                 │
│ Phone *            [_________]  │  <- Required
│                                 │
│ Company            [_________]  │  <- Optional
│                                 │
│ Purpose of Visit * [_________]  │  <- Required
│                                 │
│ Host Name *        [_________]  │  <- Required
│                                 │
│         [Generate QR Code]      │
└─────────────────────────────────┘
```

#### Step 3: Fill Required Fields

1. **Full Name** 
   - Example: John Doe
   - Type: Text
   - Max length: 50 characters

2. **Email Address**
   - Example: john.doe@example.com
   - Type: Email
   - Valid format required

3. **Phone Number**
   - Example: +91 9876543210
   - Type: Telephone
   - Can include country code

4. **Company Name** (Optional)
   - Example: ABC Corporation
   - Type: Text
   - Leave blank if self-employed

5. **Purpose of Visit**
   - Example: Business Meeting / Delivery / Technical Support
   - Type: Text
   - Be specific

6. **Host Name** (Person to meet)
   - Example: Jane Smith
   - Type: Text
   - Manager/Employee name

#### Step 4: Generate QR Code
- Click "Generate QR Code" button
- Wait for automatic QR generation
- QR code appears below form

#### Step 5: Save QR Code
```
┌──────────────────────┐
│  QR CODE GENERATED!  │
│                      │
│    ┌──────────┐     │
│    │ ██  ██   │     │
│    │ █  ██ █  │     │
│    │ ██ ██    │     │
│    └──────────┘     │
│                      │
│ Please scan this QR  │
│ code at entry        │
└──────────────────────┘
```

- Take screenshot or note QR code
- Show to receptionist at entry

---

## Admin Setup

### Admin Registration

**Location:** http://localhost:3001/register

#### Step 1: Go to Registration Page
- Navigate to: http://localhost:3001/register
- You'll see admin registration form

#### Step 2: Fill Registration Details
```
┌─────────────────────────────┐
│  ADMIN REGISTRATION         │
├─────────────────────────────┤
│ Name      [______________]  │
│ Email     [______________]  │
│ Password  [______________]  │
│ Confirm   [______________]  │
│                             │
│       [Register]            │
│                             │
│ Have account? Login here    │
└─────────────────────────────┘
```

#### Step 3: Validate Information
- **Name:** Full name (required)
- **Email:** Valid email address (required, must be unique)
- **Password:** Minimum 6 characters (required)
- **Confirm:** Match password exactly (required)

#### Step 4: Submit Registration
- Click "Register" button
- System verifies email uniqueness
- Auto-login to dashboard (if successful)
- Error message (if email exists)

---

### Admin Login

**Location:** http://localhost:3001/login

#### Step 1: Go to Login Page
- Navigate to: http://localhost:3001/login

#### Step 2: Enter Credentials
```
┌─────────────────────────────┐
│  ADMIN LOGIN                │
├─────────────────────────────┤
│ Email    [______________]   │
│ Password [______________]   │
│                             │
│       [Login]               │
│                             │
│ No account? Register here   │
└─────────────────────────────┘
```

#### Step 3: Submit Login
- Click "Login" button
- Wait for authentication
- Auto-redirect to dashboard (if successful)
- Error message (if credentials invalid)

#### Step 4: Session Management
- Session stored in browser
- Valid for 7 days
- Click "Logout" to end session

---

## Dashboard Usage

**Location:** http://localhost:3001/dashboard (Requires Login)

### Dashboard Overview

```
┌──────────────────────────────────────────────────┐
│ QR Visitor Management System    [Dashboard] [Logout] │
├──────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │    5     │  │    3     │  │    2     │      │
│  │ Total    │  │ Checked  │  │ Checked  │      │
│  │ Visitors │  │ In       │  │ Out      │      │
│  └──────────┘  └──────────┘  └──────────┘      │
│                                                  │
│  ┌─────────────────────────────────────────┐    │
│  │ RECENT VISITORS                         │    │
│  ├─────────────────────────────────────────┤    │
│  │ Name    │ Email    │ Purpose │ Status   │    │
│  ├─────────┼──────────┼─────────┼──────────┤    │
│  │ John    │ john@... │ Meeting │ ✓ Check  │    │
│  │ Jane    │ jane@... │ Support │ Checked  │    │
│  │ Mike    │ mike@... │ Delivery│ ✓ Check  │    │
│  └─────────────────────────────────────────┘    │
└──────────────────────────────────────────────────┘
```

### Dashboard Components

#### 1. Statistics Cards (Top Section)

**Total Visitors**
- Shows: All visitors ever registered
- Updates: Automatic after each action
- Color: Purple gradient

**Checked In**
- Shows: Currently in office
- Updates: Real-time when check-in
- Color: Green

**Checked Out**
- Shows: Already departed
- Updates: Real-time when check-out
- Color: Blue

#### 2. Visitor Table (Main Section)

**Columns:**
- **Name** - Visitor full name
- **Email** - Email address
- **Phone** - Contact number
- **Purpose** - Reason for visit
- **Status** - Current status
- **Actions** - Check-in/Check-out button

**Status Colors:**
- 🟡 **Pending** - Not checked in yet (Yellow)
- 🟢 **Checked-In** - Currently in office (Green)
- 🔵 **Checked-Out** - Has left (Blue)

---

## Visitor Management

### Checking In a Visitor

**Scenario:** Visitor arrives at reception

#### Method 1: From Dashboard
1. Go to Dashboard
2. Find visitor in table
3. Look for green "Check In" button
4. Click button
5. Confirmation message appears
6. Status changes from "Pending" to "Checked-In"
7. Statistics auto-update

#### Step-by-Step
```
1. Reception receives visitor
        ↓
2. Visitor provides QR code or name
        ↓
3. Admin finds visitor in dashboard table
        ↓
4. Admin clicks "Check In" button
        ↓
5. System records check-in time
        ↓
6. Status changes to "Checked-In"
        ↓
7. "Checked In" stat increases by 1
```

---

### Checking Out a Visitor

**Scenario:** Visitor is leaving the office

#### Method 1: From Dashboard
1. Go to Dashboard
2. Filter to show "Checked-In" visitors (optional)
3. Find visitor with "Checked-In" status
4. Look for yellow "Check Out" button
5. Click button
6. Confirmation message appears
7. Status changes from "Checked-In" to "Checked-Out"
8. Check-out time recorded
9. Statistics auto-update

#### Step-by-Step
```
1. Visitor informs reception they're leaving
        ↓
2. Admin opens dashboard
        ↓
3. Finds visitor in table
        ↓
4. Clicks "Check Out" button
        ↓
5. System records check-out time
        ↓
6. Status changes to "Checked-Out"
        ↓
7. "Checked Out" stat increases
```

---

## History & Reports

**Location:** http://localhost:3001/history (Requires Login)

### Viewing Visitor History

#### Step 1: Navigate to History Page
- Click "History" in navigation menu
- Or go directly to: http://localhost:3001/history

#### Step 2: View Complete Records
```
┌──────────────────────────────────────────────────┐
│ VISITOR HISTORY                                  │
├──────────────────────────────────────────────────┤
│ [All] [Checked In] [Checked Out]                │
├──────────────────────────────────────────────────┤
│ Name │ Email │ Company │ Check-In │ Check-Out  │
├──────┼───────┼─────────┼──────────┼────────────┤
│ John │ john@ │ ABC Co. │ 10:30 AM │ 11:45 AM  │
│ Jane │ jane@ │ XYZ Ltd │ 2:00 PM  │ 3:15 PM   │
│ Mike │ mike@ │ -       │ 3:30 PM  │ -         │
└──────────────────────────────────────────────────┘
```

### Filtering History

**Filter Options:**

1. **All Visitors** (Default)
   - Shows: All visitors (any status)
   - Use: Get complete list

2. **Checked In**
   - Shows: Currently in office
   - Use: See who's still here

3. **Checked Out**
   - Shows: Already departed
   - Use: View completed visits

### Information Available

| Column | Shows | Format |
|--------|-------|--------|
| Name | Visitor name | Text |
| Email | Email address | Email |
| Company | Organization | Text |
| Purpose | Reason for visit | Text |
| Host | Person to meet | Text |
| Check-In Time | Entry timestamp | Date & Time |
| Check-Out Time | Exit timestamp | Date & Time |
| Status | Current status | Badge |

---

## FAQs

### Q1: I forgot my admin password?
**A:** 
- Note: Password recovery not yet implemented
- Workaround: Register new admin account
- Future: Password reset feature coming

### Q2: Can visitors check in themselves?
**A:**
- No, only admins can check in from dashboard
- Visitors register online via visitor form
- Reception staff performs check-in/check-out

### Q3: Is my data secure?
**A:**
- ✅ Passwords encrypted (bcryptjs)
- ✅ Data stored in secure MongoDB
- ✅ JWT authentication enabled
- ✅ CORS protection active

### Q4: How long do sessions last?
**A:**
- Admin sessions valid for 7 days
- Auto-logout after expiry
- Can manually logout anytime

### Q5: Can I export visitor data?
**A:**
- Not yet implemented
- Manual export: Take screenshots
- Future: CSV/PDF export coming

### Q6: What if QR code doesn't scan?
**A:**
- Manual entry: Enter visitor info in search
- Ask visitor for email/name
- Admin manually checks in

### Q7: Can multiple admins use same account?
**A:**
- Yes, each person needs own account
- Recommended: One account per admin
- Better security & audit trail

### Q8: What if system crashes?
**A:**
- Data is in MongoDB (persistent)
- No data loss
- Refresh browser and login again
- Contact IT if servers down

---

## Troubleshooting

### Issue 1: Cannot Register Visitor

**Error:** "Registration failed"

**Solutions:**
1. Check all required fields are filled
2. Verify email format is valid
3. Check internet connection
4. Server might be down - refresh page
5. Clear browser cache

---

### Issue 2: Cannot Login

**Error:** "Invalid credentials"

**Solutions:**
1. Check email spelling
2. Verify password is correct
3. Password is case-sensitive
4. Check caps lock is off
5. Create new account if forgotten

---

### Issue 3: QR Code Not Generating

**Error:** "Failed to generate QR code"

**Solutions:**
1. Refresh page and try again
2. Check all form fields are valid
3. Check internet connection
4. Clear browser cache
5. Try different browser

---

### Issue 4: Dashboard Not Loading

**Error:** Page blank or loading

**Solutions:**
1. Refresh page (F5 or Ctrl+R)
2. Check if logged in (if not, go to login)
3. Clear browser cache
4. Check internet connection
5. Verify backend is running

---

### Issue 5: Check-In/Check-Out Not Working

**Error:** Button doesn't respond

**Solutions:**
1. Refresh page
2. Check if admin is logged in
3. Verify visitor exists in table
4. Check browser console for errors
5. Try different browser

---

### Issue 6: Slow Performance

**Symptoms:** Page loads slowly, buttons lag

**Solutions:**
1. Check internet speed
2. Close other browser tabs
3. Clear browser cache
4. Restart browser
5. Check if server is busy

---

## Best Practices

### ✅ DO's

- ✅ Check-in visitors promptly upon arrival
- ✅ Check-out visitors when they leave
- ✅ Use real names for all visitors
- ✅ Keep host names consistent
- ✅ Logout when finished
- ✅ Report issues immediately
- ✅ Keep password secure
- ✅ Backup important data

### ❌ DON'Ts

- ❌ Don't share admin credentials
- ❌ Don't leave session unattended
- ❌ Don't create fake visitor entries
- ❌ Don't use unauthorized usernames
- ❌ Don't close browser without logout
- ❌ Don't share QR codes improperly

---

## Tips & Tricks

### Tip 1: Batch Check-In
- If multiple visitors arrive together
- Check them in one by one
- Stats update after each

### Tip 2: Filter by Status
- Use History page filters
- Quickly find checked-in visitors
- Search by status in one click

### Tip 3: Mobile Friendly
- System works on mobile
- Perfect for receptionists on-the-go
- Touch-optimized buttons

### Tip 4: Keyboard Shortcuts
- Tab: Navigate between fields
- Enter: Submit forms
- F5: Refresh page

---

## Support

### Getting Help

| Issue | Contact | Response Time |
|-------|---------|----------------|
| Technical Error | IT Help Desk | ASAP |
| Feature Request | Manager | 24 hours |
| Password Issue | IT Help Desk | Same day |
| General Question | Supervisor | 1 hour |

---

**Last Updated:** 27th April 2026  
**User Guide Version:** 1.0  
**Status:** Complete
