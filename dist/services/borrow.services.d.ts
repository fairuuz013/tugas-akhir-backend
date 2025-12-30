import { PrismaClient } from "../generated";
import type { IBorrowRepository } from "../repository/borrow.repository.js";
interface BorrowItemInput {
    bookId: number;
    qty: number;
}
interface BorrowFilter {
    status?: "BORROWED" | "RETURNED";
    memberName?: string;
    startDate?: Date;
    endDate?: Date;
}
interface BorrowParams {
    page: number;
    limit: number;
    filters?: BorrowFilter;
}
export interface IBorrowService {
    list(params: BorrowParams): Promise<any>;
    getById(id: string): Promise<any>;
    borrow(userId: number, items: BorrowItemInput[]): Promise<any>;
    returnBorrow(id: string): Promise<any>;
}
export declare class BorrowServices implements IBorrowService {
    private borrowRepo;
    private prisma;
    constructor(borrowRepo: IBorrowRepository, prisma: PrismaClient);
    list({ page, limit, filters }: BorrowParams): Promise<{
        borrows: {
            id: number;
            createdAt: Date;
            userId: number;
            status: string;
        }[];
        total: number;
        totalPages: number;
        currentPage: number;
    }>;
    getById(id: string): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        status: string;
    }>;
    borrow(userId: number, items: BorrowItemInput[]): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        status: string;
    }>;
    returnBorrow(id: string): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        status: string;
    }>;
}
export {};
//# sourceMappingURL=borrow.services.d.ts.map
