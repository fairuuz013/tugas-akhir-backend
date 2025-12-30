import { errorResponse } from "../utils/response.js";
export const adminOnly = (req, res, next) => {
    if (!req.user) {
        return errorResponse(res, "Unauthorized", 401);
    }
    if (req.user.role !== "ADMIN") {
        return errorResponse(res, "Akses khusus ADMIN", 403);
    }
    next();
};
//# sourceMappingURL=admin.middleware.js.map
