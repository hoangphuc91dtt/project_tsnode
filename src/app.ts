import express from "express";
import path from "path";
import indexRoutes from "./routes/index";
import { connect } from "./config/connectDB";
//Init
const app = express();
const port = 3000;

//connect mongodb
connect();

//config view

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

//config Routes
app.use("/", indexRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
