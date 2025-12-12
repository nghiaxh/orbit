import express from "express";
import cors from "cors";

import noteRouter from "./routes/note.route.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Orbit" });
});

app.use("/api/note", noteRouter);

app.use((req, res, next) => {
    return next(new Error("Resource not found"));
});

app.use((req, res, next) => {
    return res.status(500).json("Internal Server Error");
});

export default app;