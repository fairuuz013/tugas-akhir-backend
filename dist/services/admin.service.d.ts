import { PrismaClient } from "../generated";
export declare class AdminService {
    private prisma;
    constructor(prisma: PrismaClient);
    getStats(): Promise<{
        totalBooksAvailable: number;
        activeBorrows: number;
        mostPopularBook: {
            id: number;
            title: string;
            author: string;
            stock: number;
            cover: string | null;
            publishedYear: number | null;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        } | null;
    }>;
}
//# sourceMappingURL=admin.service.d.ts.map