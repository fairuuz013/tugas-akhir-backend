import { body, param, validationResult } from "express-validator";
import { errorResponse } from "../utils/response.js";
export const validate = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        const errorList = errors.array().map(err => ({
            field: err.type === "field" ? err.path : "unknown",
            message: err.msg
        }));
        return errorResponse(res, "Validasi gagal", 400, errorList);
    };
};
export const createBookValidation = [
    body("title")
        .trim()
        .notEmpty().withMessage("Judul buku wajib diisi")
        .isLength({ min: 3 }).withMessage("Nama Judul buku  minimal 3 karakter"),
    body("author")
        .trim()
        .notEmpty().withMessage("nama penulis wajib diisi"),
    body("stock")
        .isNumeric().withMessage("release harus angka ngga boleh string")
        .custom(value => value > 0).withMessage("harus sesuai tahun release")
];
// Validasi untuk GET by ID produk
export const getBookByIdValidation = [
    param("id")
        .isNumeric().withMessage("ID harus angka")
];
export const apiKey = (req, res, next) => {
    const apiKey = req.headers["x-api-key"];
    if (!apiKey) {
        return res.status(401).json({
            success: false,
            message: "Header X-API-Key wajib diisi untuk akses API!"
        });
    }
    if (apiKey !== "katasandi123") {
        return res.status(403).json({
            success: false,
            message: "API Key tidak valid!"
        });
    }
    next();
};
export const logging = (req, _res, next) => {
    console.log(`Request masuk: ${req.method} ${req.path}`);
    req.startTime = Date.now();
    next();
};
//# sourceMappingURL=book.validasion.js.map
