import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "AICERTS",
    })
    .then(() => {
      console.log("Database connection established");
    })
    .catch((err) => console.error(err));
};

export default connectDatabase;
