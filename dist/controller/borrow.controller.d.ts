import type { Request, Response } from "express";
import type { IBorrowService } from "../services/borrow.services.js";
export declare class BorrowController {
    private borrowService;
    constructor(borrowService: IBorrowService);
    list(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    borrow(req: Request, res: Response): Promise<void>;
    returnBorrow(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=borrow.controller.d.ts.map
