import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/auth.js";
import cors from "cors";
import session from "express-session";
import { sign_Out } from "./controllers/usersController.js";

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
const allowedOrigins = [
  "http://localhost:5173",
  "https://quickshop-omega.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by cors"));
      }
    },
    credentials: true,
  })
);

// function (origin, callback) {
//   if (!origin || allowedOrigins.includes(origin)) {
//     callback(null, true);
//   } else {
//     callback(new Error("Not allowed by cors"));
//   }
// }

app.use((req, res, next) => {
  const origin = req.headers.origin;

  //Check if the request is in the allowed list
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  //Allow credentials (cookies, authorization headers)
  res.setHeader("Access-Control-Allow-Credentials", "true");

  //Allow Specific HTTP methods
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  //Allow headers used by the frontend
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  //Handle OPTIONS preflight request
  if (res.method === "OPTIONS") {
    return res.sendStatus(204);
  }
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
