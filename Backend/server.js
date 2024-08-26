import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/auth.js";
import cors from "cors";

dotenv.config();
const app = express();

//Middleware
app.use(express.json());

//Access PORT and DB
const PORT = process.env.PORT || 8000;
const mongoUri = process.env.MONGO_URI;

// Enable CORS for all routes and origins
app.use(cors());

//Routes
app.get("/", (req, res) => {
  res.send("Hello from express API Updated");
});

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("Connection Error:", error.message);
  });

//Router
app.use("/api/products", productRoutes);
app.use("/api/auths", userRoutes);
