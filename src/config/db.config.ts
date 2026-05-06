import mongoose from "mongoose";

import dotenv from "@dotenvx/dotenvx";
dotenv.config();

export const port = process.env.PORT || 5000;

export const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`).then(() => {
      console.log("MongoDB connected successfully");
    });
  } catch (error) {
    error;
    process.exit(1);
  }
};

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// export const port = Number(process.env.PORT) || 5000;

// export const connectDb = async () => {
//   try {
//     if (!process.env.MONGODB_URL) {
//       throw new Error("MONGODB_URL is not defined in .env");
//     }

//     await mongoose.connect(process.env.MONGODB_URL);

//     console.log("MongoDB connected successfully");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     process.exit(1);
//   }
// };
