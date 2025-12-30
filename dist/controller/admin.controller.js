import { successResponse } from "../utils/response.js";
import { AdminService } from "../services/admin.service.js";
export class AdminController {
    adminService;
    constructor(adminService) {
        this.adminService = adminService;
        this.stats = this.stats.bind(this);
    }
    async stats(_req, res) {
        const data = await this.adminService.getStats();
        successResponse(res, "Statistik admin", data);
    }
}
//# sourceMappingURL=admin.controller.js.map
