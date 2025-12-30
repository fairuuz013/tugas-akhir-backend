import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./utils/swagger.js";
import { successResponse } from "./utils/response.js";
import bookRouter from "./routes/book.route.js";
import authRoute from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import { errorHandler } from "./middleware/error.handler.js";
const app = express();
app.use(express.json());
// =====================
// SWAGGER (HARUS DI ATAS)
// =====================
const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
// =====================
// ROOT
// =====================
app.get("/", (_req, res) => {
    successResponse(res, "Welcome to API Perpustakaan", {
        hari: 4,
        status: "Server Hidup",
    });
});
// =====================
// ROUTES
// =====================
app.use("/api/auth", authRoute);
app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);
// =====================
// 404 HANDLER
// =====================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} tidak ditemukan`,
    });
});
// =====================
// ERROR HANDLER
// =====================
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map
