# 📌 NextEvent

NextEvent is a modern event management web application built with Next.js that allows users to discover, create, and manage events seamlessly. The platform provides an intuitive interface for both event organizers and attendees, including ticket booking and personalized dashboards.

---

## 🚀 Live Demo

👉 [https://next-event-ochre.vercel.app]
---

## 🚀 Key Features

### 🔐 Authentication
- Firebase-based login & signup
- Google Sign-In integration
- Protected routes using AuthGuard

### 📅 Event Management
- Create, update, and delete events
- Manage personal events dashboard
- Image preview support while creating events

### 🔍 Event Discovery
- Browse all available events
- Search functionality
- Filter by category and price

### 🎟 Ticket System
- Buy tickets with quantity selection
- Local storage-based ticket system
- View purchased tickets in dashboard

### 📊 Dashboard
- Overview of events and performance
- Personal ticket tracking
- Event statistics UI

### 📥 Export Feature
- Download created events as CSV file

### ⚙️ User Settings
- Update profile information
- Store additional user data locally

### 📱 Responsive Design
- Fully responsive UI (mobile, tablet, desktop)
- Built with Tailwind CSS + shadcn/ui

---

## 🧠 Tech Stack

| Category | Technology |
|--------|----------|
| Frontend | Next.js (App Router), React |
| Styling | Tailwind CSS, shadcn/ui |
| Backend | Firebase |
| Database | Firestore |
| Auth | Firebase Authentication |
| State | React Hooks |
| Deployment | Vercel |

---

## ⚙️ Setup & Installation

### 1. Clone Repository

```bash
git clone https://github.com/Utsho11/next-event.git
cd next-event
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file and go to mux website open an account to get mux id and token:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
MUX_TOKEN_ID=your_mux_token_id
MUX_TOKEN_SECRET=your_token_secret
```

### 4. Run Development Server

```bash
npm run dev
```

Open:

http://localhost:3000

### 5. Build for Production

```bash
npm run build
npm start
```

---

## 🗂 Route Summary

### 🌐 Public Routes

```bash
/                → Home page\n
/events          → Browse all events
/login           → Login page
/register        → Register page
/features        → Features page
/privacy         → Privacy policy
/terms           → Terms of service

```

### 🔐 Protected Routes

```bash

/events/[id]     → Event details
/events/add      → Create event
/events/manage   → Manage events
/dashboard       → User dashboard
/settings        → User profile settings

```

---

## 🎯 Project Structure

```bash

src/
 ├── app/
 │   ├── dashboard/
 │   ├── events/
 │   ├── login/
 │   ├── register/
 │   ├── settings/
 │   └── ...
 ├── components/
 │   ├── dashboard/
 │   ├── events/
 │   ├── auth/
 │   └── ui/
 ├── lib/
 ├── services/
 ├── constants/

```
---

# 👋 Thank you for reading this repo.


