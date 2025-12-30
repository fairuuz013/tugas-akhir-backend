import jwt from "jsonwebtoken";
import { errorResponse } from "../utils/response.js";
import config from "../utils/env.js";
export const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return errorResponse(res, "Token tidak ditemukan", 401);
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
        return errorResponse(res, "Token tidak valid", 401);
    }
    try {
        const decoded = jwt.verify(token, config.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        return errorResponse(res, "Token tidak valid", 401);
    }
};
//# sourceMappingURL=auth.middleware.js.map
