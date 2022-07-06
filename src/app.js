import "./db/mongoose";
import express from "express";
import routes from "./routes";
import "dotenv/config";

const port = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use("/api/v1", routes);
app.listen(port, () => console.log(`The server is running on port ${port}`));
