# Hobby Session Planner

A full-stack web application for planning and managing hobby sessions with attendance tracking.

## Features

- **Session Management**: Create, view, and manage hobby sessions
- **Attendance Tracking**: Track participant attendance for each session
- **Responsive UI**: Modern, mobile-friendly interface built with React and TypeScript
- **RESTful API**: Backend API for data management

## Tech Stack

### Frontend
- React with TypeScript
- Vite (build tool)
- CSS Modules for styling
- React Router for navigation

### Backend
- Node.js
- Express.js
- MongoDB (implied from models structure)

## Project Structure

```
hobby-session-planner/
├── backend/
│   ├── models/
│   │   └── Session.js
│   ├── routes/
│   │   ├── ai.js
│   │   ├── attendance.js
│   │   └── sessions.js
│   ├── utils/
│   │   └── codes.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── CreateSession.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── SessionDetails.tsx
│   │   │   └── SessionsList.tsx
│   │   ├── styles/
│   │   │   ├── CreateSession.css
│   │   │   ├── SessionDetails.css
│   │   │   └── sessionsList.css
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── main.tsx
│   │   └── index.css
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm 

### Installation

1. Clone the repository
```bash
git clone https://github.com/mahasan24/Hobby-Session-planner.git
cd Hobby-Session-planner
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

4. Configure environment variables

Create a `.env` file in the `backend` directory:
```env
# backend/.env
MONGODB_URI=mongodb+srv://mahasan24_db_user:Password@cluster0.hzyfine.mongodb.net/hobby?retryWrites=true&w=majority&appName=Cluster0
PORT=4000
```

### Running the Application

1. Start the backend server
```bash
cd backend
npm run dev
```

2. Start the frontend development server
```bash
cd frontend
npm run dev
```

3. Open browser and navigate to `http://localhost:5173` (or the port shown in terminal)

## API Endpoints

### Sessions
- `GET /api/sessions` - Get all sessions
- `GET /api/sessions/:id` - Get session by ID
- `POST /api/sessions` - Create new session
- `PUT /api/sessions/:id` - Update session
- `DELETE /api/sessions/:id` - Delete session

### Attendance
- `GET /api/attendance/:sessionId` - Get attendance for a session
- `POST /api/attendance` - Record attendance
- `PUT /api/attendance/:id` - Update attendance record

### AI Features
- `POST /api/ai` - AI-powered features (describe specific functionality)

## Pages

- **Home**: Landing page with overview
- **Create Session**: Form to create new hobby sessions
- **Sessions List**: View all scheduled sessions
- **Session Details**: Detailed view of individual sessions with attendance tracking





## Contact

Your Name - Mahmudul Hasan

Project Link: [https://github.com/mahasan24/Hobby-Session-planner](https://github.com/mahasan24/Hobby-Session-planner)

## Acknowledgments

- React documentation
- Express.js documentation
- MongoDB documentation
- Vite documentation
