require("dotenv").config()

const express = require("express")

const connectDB = require("./config/db")

const authRoutes = require("./routes/authRoutes")

const projectRoutes = require("./routes/projectRoutes")

const app = express()

connectDB()

app.use(express.json())

app.use("/api/auth",authRoutes)

app.use("/api/projects",projectRoutes)

app.get("/",(req,res)=>{
 res.send("Project Management API Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
 console.log("Server running on port "+PORT)
})
