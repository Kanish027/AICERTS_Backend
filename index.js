import express from "express";
import "dotenv/config";
import connectDatabase from "./database/dbConnect.js";
import todoRoute from "./routes/todoRoute.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/v1/todo", todoRoute);

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
