const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const connectDB=require('./config/database');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();
app.get("/", (req, res) => {
  res.send("Polling System Backend");
});

// Create server with socket.io
const port = process.env.PORT || 3000;
const server = http.createServer(app);


server.listen(port, () => {
  console.log(`🚀 Server running on port ${port}...`);
});
