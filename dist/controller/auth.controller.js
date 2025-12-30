import { successResponse } from "../utils/response.js";
import { AuthService } from "../services/auth.service.js";
export class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    register = async (req, res) => {
        const user = await this.authService.register(req.body);
        successResponse(res, "Register berhasil", user, null, 201);
    };
    login = async (req, res) => {
        const result = await this.authService.login(req.body.email, req.body.password);
        successResponse(res, "Login berhasil", result);
    };
}
//# sourceMappingURL=auth.controller.js.map
