import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();
// const PORT = 5000;

app.listen(process.env.PORT, () => {
  console.log("server is running => " + process.env.PORT);
});
