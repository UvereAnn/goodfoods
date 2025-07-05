import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://annugwuonu:2031500025@cluster0.3x6iqfj.mongodb.net/goodfoods"
    )
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log("DB connection error:", error));
};
