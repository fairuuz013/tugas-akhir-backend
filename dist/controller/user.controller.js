import { successResponse } from "../utils/response.js";
export class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    me = async (req, res) => {
        const user = await this.userService.getMe(req.user.id);
        successResponse(res, "Data user", user);
    };
    list = async (_req, res) => {
        const users = await this.userService.listUsers();
        successResponse(res, "List user", users);
    };
    delete = async (req, res) => {
        const user = await this.userService.deleteUser(req.params.id);
        successResponse(res, "User dihapus", user);
    };
}
//# sourceMappingURL=user.controller.js.map
