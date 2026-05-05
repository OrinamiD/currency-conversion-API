import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { connectDb, port } from "./src/config/db.config.js";
import router from "./src/currency-converion/conversion/conversion.routes.js";
// import cookieParser = require("cookie-parser");
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);
if (process.env.NODE_ENV === "production") {
    app.set("trust proxy", 1);
}
// catch JSON syntax errors
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && "body" in err) {
        return res
            .status(400)
            .json({ success: false, message: "Invalid JSON format." });
    }
    next(err);
});
// Start server after DB connects
connectDb()
    .then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
})
    .catch((err) => {
    console.error(err);
});
process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
});
process.on("unhandledRejection", (reason) => {
    console.error("Unhandled Rejection:", reason);
});
app.use("/v1/api", router);
app.use((err, req, res, next) => {
    console.error("Unhandled error:", err.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
});
//# sourceMappingURL=index.js.map