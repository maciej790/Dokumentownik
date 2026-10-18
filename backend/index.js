import express from "express";
import authRoutes from "./api/routes/authRoutes.js";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Middleware
app.use(express.json());

//ALL APP ROUTES//
// auth routes
app.use("/api/auth", authRoutes);

