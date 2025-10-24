import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import connectDB from "./db/connection.js";
import messagesRoute from "./routes/messagesRoute.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const PORT = process.env.PORT || 5000;

// ✅ Recrear __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser());

// ✅ Rutas de API
app.use("/api/auth", authRoute);
app.use("/api/messages", messagesRoute);
app.use("/api/users", userRoute);

// ✅ Servir el frontend de producción (React + Vite)
app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));

app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
});

// ✅ Conexión a la base de datos y levantar el servidor
connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
});
