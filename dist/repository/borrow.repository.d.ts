import type { Prisma, PrismaClient, BorrowRecord, Book } from "../generated";
export interface IBorrowRepository {
    list(skip: number, take: number, where: Prisma.BorrowRecordWhereInput, orderBy: Prisma.BorrowRecordOrderByWithRelationInput): Promise<BorrowRecord[]>;
    countAll(where: Prisma.BorrowRecordWhereInput): Promise<number>;
    findById(id: number): Promise<BorrowRecord | null>;
    createBorrowRecord(data: Prisma.BorrowRecordCreateInput): Promise<BorrowRecord>;
    createBorrowItems(data: Prisma.BorrowItemCreateManyInput[]): Promise<void>;
    updateBookStock(bookId: number, stock: number): Promise<Book>;
    updateStatus(id: number, status: string): Promise<BorrowRecord>;
}
export declare class BorrowRepository implements IBorrowRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    list(skip: number, take: number, where: Prisma.BorrowRecordWhereInput, orderBy: Prisma.BorrowRecordOrderByWithRelationInput): Promise<BorrowRecord[]>;
    countAll(where: Prisma.BorrowRecordWhereInput): Promise<number>;
    findById(id: number): Promise<BorrowRecord | null>;
    createBorrowRecord(data: Prisma.BorrowRecordCreateInput): Promise<BorrowRecord>;
    createBorrowItems(data: Prisma.BorrowItemCreateManyInput[]): Promise<void>;
    updateBookStock(bookId: number, stock: number): Promise<Book>;
    updateStatus(id: number, status: string): Promise<BorrowRecord>;
}
//# sourceMappingURL=borrow.repository.d.ts.map