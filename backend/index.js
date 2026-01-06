import express from "express";
import mailRoute from "./router/mailRoute.js";
import projectPostRoute from "./router/projectPost.js";
import connectToDatabase from "./middleware/conn.js";

const app = express();

// JSON parsing middleware to parse incoming JSON requests
app.use(express.json());
connectToDatabase();
// Use the mail route
app.use("/api", mailRoute);
app.use("/api", projectPostRoute);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});