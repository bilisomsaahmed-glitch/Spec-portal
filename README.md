# SPEC-JIT Portal

A full-stack portal for SPEC-JIT, the Jimma University JIT Campus Software Programming and Engineering Club, with three divisions: **Development**, **Competitive Programming**, and **Capacity Building**. Students register, apply for membership, track applications, and join events. Division leaders and executives publish events and announcements. Members use role-based dashboards for projects, contests, trainings, notifications, search, and reports.

## Stack

- Frontend: React 18, Vite, Tailwind CSS, React Router
- Backend: Node.js, Express, MongoDB (Mongoose)
- Auth: JWT, bcrypt password hashing, role-based access control

## Project layout

```
backend/     Express API, Mongoose models, seed script
frontend/    Vite React app
```

## Prerequisites

- Node.js 18+
- MongoDB 7 installed and running locally

## Setup

### 1. Start MongoDB

Start your local MongoDB service, then set `MONGODB_URI` in `backend/.env` if your local connection differs from `mongodb://127.0.0.1:27017/techclub`.

### 2. Backend

```bash
cd backend
cp .env.example .env   # configure the values before starting the API
npm install
npm run seed
npm run dev
```

API: [http://127.0.0.1:5000](http://127.0.0.1:5000)  
Health: `GET /api/health`

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

App: [http://localhost:5173](http://localhost:5173)

The Vite dev server proxies `/api` to the Express backend.

## Environment variables

`backend/.env`

| Variable | Description |
| --- | --- |
| `PORT` | API port (default `5000`) |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Signing secret for access tokens |
| `JWT_EXPIRES_IN` | Token lifetime (default `7d`) |
| `CLIENT_ORIGIN` | CORS origin for the React app |

## Demo accounts

Password for all seeded users: `Password123!`

| Email | Role |
| --- | --- |
| `admin@techclub.edu` | System administrator |
| `exec@techclub.edu` | Club executive |
| `lead.dev@techclub.edu` | Development leader |
| `lead.cp@techclub.edu` | Competitive Programming leader |
| `lead.cb@techclub.edu` | Capacity Building leader |
| `member@techclub.edu` | Member (Development) |
| `student@techclub.edu` | Student with a pending application |

The seed also creates events, announcements, a Development project with teams/tasks, Competitive Programming practice resources, a contest and leaderboard score, and a Capacity Building training.

## Features

**Public**

- Club homepage, division overviews, upcoming events, announcements
- Join / register CTA

**Accounts & membership**

- Registration and login
- Membership application with division preference
- Status tracking
- Executive approve / reject with assigned division

**Events**

- Create and edit events (venue, dates, capacity, registration deadline, cancel policy)
- Student/member registration and cancellation
- Staff registration lists

**Division workspaces (members)**

- Development: projects, GitHub links, teams, tasks
- Competitive Programming: practice resources, contests, scores, leaderboard
- Capacity Building: trainings, materials, enrollment, attendance, progress

**Operations**

- Role-based dashboards (student, member, division leader, executive, admin)
- Member directory and member management
- Notifications
- Search and filters
- Club reports and stats
- Protected routes and server-side validation

## API overview

| Area | Base path |
| --- | --- |
| Auth | `/api/auth` |
| Membership | `/api/memberships` |
| Events | `/api/events` |
| Announcements | `/api/announcements` |
| Users | `/api/users` |
| Development | `/api/development` |
| Competitive Programming | `/api/competitive` |
| Capacity Building | `/api/capacity` |
| Notifications | `/api/notifications` |
| Dashboard | `/api/dashboard` |
| Reports | `/api/reports` |
| Search | `/api/search` |
| Public home | `/api/public/home` |

Send `Authorization: Bearer <token>` on authenticated routes.

## SPEC-JIT identity

SPEC-JIT is the Software Programming and Engineering Club at Jimma University JIT Campus. The portal's three divisions are Development, Competitive Programming, and Capacity Building.
