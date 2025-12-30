import type { Request, Response } from "express";
import { AdminService } from "../services/admin.service.js";
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminService);
    stats(_req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=admin.controller.d.ts.map
