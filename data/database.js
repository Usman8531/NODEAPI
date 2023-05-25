import mongoose from "mongoose";

// connecting dataBase
export const connectDB = () => {

  mongoose
    .connect(process.env.mongoBD_URL)
    .then(() => {
      console.log("dataBase Connected successfully");
    })
    .catch((e) => console.log(" error in connecting dataBase =>", e));
};
