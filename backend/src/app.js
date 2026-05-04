import express from "express";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import notFound from "./middlewares/notFound.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

// ✅ ADD THIS HERE
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// ❌ 404 (must be AFTER all routes)
app.use(notFound);

// ❌ error handler (last)
app.use(globalErrorHandler);

export default app;