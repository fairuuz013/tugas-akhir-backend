import type { Request, Response } from "express";
import type { IUserService } from "../services/user.services.js";
export declare class UserController {
    private userService;
    constructor(userService: IUserService);
    me: (req: Request, res: Response) => Promise<void>;
    list: (_req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=user.controller.d.ts.map
