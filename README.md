# Project Management API

A secure and scalable RESTful API built with **Node.js** and **Express.js** for managing projects in a **multi-tenant environment**.
The system includes **JWT-based authentication**, **role-based data access**, and a **modular backend architecture**.

This project demonstrates best practices for building production-ready backend services, including authentication, validation, and secure resource ownership.

---

# Features

* JWT Authentication
* Multi-tenant project isolation
* CRUD operations for projects
* Secure ownership access control
* Modular architecture (Controllers → Services → Routes → Models)
* MongoDB cloud database
* Environment variable configuration
* RESTful API design

---

# Tech Stack

Backend

* Node.js
* Express.js

Database

* MongoDB (Cloud via MongoDB Atlas)

Authentication

* JSON Web Token (JWT)

Tools

* Postman (API testing)
* Git & GitHub (version control)

---

# Project Architecture

src/
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   └── projectController.js
│
├── middleware
│   └── authMiddleware.js
│
├── models
│   ├── User.js
│   └── Project.js
│
├── routes
│   ├── authRoutes.js
│   └── projectRoutes.js
│
├── services
│   └── projectService.js
│
└── app.js

Architecture Flow:

Client Request
→ Routes
→ Controllers
→ Services
→ Database

---

# Installation (Run Locally)

Clone repository

git clone https://github.com/manojkushwah91/project-management-api.git

Move into project folder

cd project-management-api

Install dependencies

npm install

---

# Environment Variables

Create a `.env` file in the root directory.

Example:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=supersecretkey

Example MongoDB URI:

mongodb+srv://username:password@cluster.mongodb.net/projectdb

---

# Start Server

Development mode

npm run dev

Production mode

npm start

Server will run on:

http://localhost:5000

---

# Authentication Flow

1. User registers an account
2. User logs in with credentials
3. Server returns a JWT token
4. Token is used in Authorization header for protected routes

Header format:

Authorization: <JWT_TOKEN>

---

# API Endpoints

Authentication

POST /api/auth/register
Register new user

POST /api/auth/login
Authenticate user and return JWT token

---

Projects (Protected)

GET /api/projects
Get all projects for authenticated user

POST /api/projects
Create new project

PUT /api/projects/:id
Update project

DELETE /api/projects/:id
Delete project

---

# Postman API Testing Examples

Register User

POST /api/auth/register

Body (JSON)

{
"email": "[test@test.com](mailto:test@test.com)",
"password": "123456",
"tenantId": "company1"
}

---

Login User

POST /api/auth/login

Body

{
"email": "[test@test.com](mailto:test@test.com)",
"password": "123456"
}

Response

{
"token": "JWT_TOKEN"
}

---

Create Project

POST /api/projects

Headers

Authorization: JWT_TOKEN
Content-Type: application/json

Body

{
"title": "Assignment Project",
"description": "Backend API task",
"status": "active"
}

---

Get Projects

GET /api/projects

Headers

Authorization: JWT_TOKEN

---

Update Project

PUT /api/projects/:id

Headers

Authorization: JWT_TOKEN

Body

{
"title": "Updated Project Title",
"status": "completed"
}

---

Delete Project

DELETE /api/projects/:id

Headers

Authorization: JWT_TOKEN

---

# Security Implementation

The API ensures that users can only access or modify their own projects.

Security mechanisms include:

JWT authentication middleware
Tenant-based filtering
Ownership verification before update or delete operations

Example logic:

owner === authenticatedUser

This prevents unauthorized access across tenants.

---

# Deployment

This API can be deployed easily using cloud platforms like Render.

Steps:

1. Push project to GitHub
2. Create a new Web Service on Render
3. Connect the repository
4. Add environment variables
5. Deploy

Environment variables required on Render:

MONGO_URI
JWT_SECRET

After deployment, the API will be accessible via a public URL.

---

# Example Deployment URL

[https://project-management-api.onrender.com](https://project-management-api-fr6n.onrender.com/)

---

# Future Improvements

Input validation with express-validator
Role-based access control
Project collaboration support
Pagination and filtering
API documentation using Swagger

---

# Author

Manoj Kushwah

GitHub
https://github.com/manojkushwah91

---

# License

This project is created for backend API development practice and technical evaluation purposes.
