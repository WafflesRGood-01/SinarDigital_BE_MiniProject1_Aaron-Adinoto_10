import express from "express";
import cors from "cors";
import confessionRoutes from "./routes/confessionRoutes.js";

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.json({ message: "Reveal your sins!" });
});

app.use("/api/confessions", confessionRoutes);

import errorHandler from "./middlewares/errorHandler.js";
app.use(errorHandler);

export default app;
