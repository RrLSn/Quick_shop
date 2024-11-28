import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/auth.js";
import cartRoutes from "./routes/cart.js";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";

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

//Use cookie-parser middleware
app.use(cookieParser());

//Other Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.use("api/cart", cartRoutes);
