// File: backend/server.js

// 1️⃣ Load environment variables
import 'dotenv/config';   // for ES Modules

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// 2️⃣ Connect to MongoDB using MONGO_URI from .env
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Database connected successfully (Atlas)'))
  .catch(err => console.error('❌ Database connection failed:', err));

const app = express();

// 3️⃣ Middleware
app.use(cors());
app.use(bodyParser.json());

// 4️⃣ Example route
app.get("/", (req, res) => {
    res.send("Lifora backend is working!");
});

// 5️⃣ Server port from .env
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
