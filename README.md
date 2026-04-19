# TaskFlow API

A RESTful backend API for task management built with Node.js and Express.

## Setup Instructions

1. Clone the repository
git clone https://github.com/ananyasharmaRR/taskflow-api.git

2. Install dependencies
npm install

3. Run the server
node server.js

4. Server runs on
http://localhost:5000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get single task |
| POST | /api/tasks | Create new task |
| PUT | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

## Technologies Used
- Node.js
- Express
- CORS
- Morgan
- Helmet