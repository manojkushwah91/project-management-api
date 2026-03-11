# Project Management API

Backend API built with Node.js and Express.

Features

- JWT Authentication
- Multi-tenant project management
- CRUD operations
- Secure ownership
- Modular architecture

Run locally

npm install

copy .env.example to .env

add MongoDB connection

npm run dev

API Routes

POST /api/auth/register

POST /api/auth/login

GET /api/projects

POST /api/projects

PUT /api/projects/:id

DELETE /api/projects/:id
