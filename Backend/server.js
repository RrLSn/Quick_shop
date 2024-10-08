import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/auth.js";
import cors from "cors";
import session from "express-session";

dotenv.config();
const app = express();

//Use session middleware
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

//Middleware
app.use(express.json());

//Access PORT and DB
const PORT = process.env.PORT || 8000;
const mongoUri = process.env.MONGO_URI;

// Enable CORS for all routes and origins
app.use(
  cors({
    origin: ["http://localhost:5173", "https://quick-shop-beryl.vercel.app"],
    credentials: true,
    methods: ["GET", "PUT", "POST", "DELETE"],
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

//Routes
app.get("/", (req, res) => {
  res.send("Hello from express API, Welcome");
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
app.use("/api/auth", userRoutes);
