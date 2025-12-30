import type { Prisma, Book, PrismaClient } from "../generated";
export interface IBookRepository {
    list(skip: number, take: number, where: Prisma.BookWhereInput, orderBy: Prisma.BookOrderByWithRelationInput): Promise<Book[]>;
    countAll(where: Prisma.BookWhereInput): Promise<number>;
    findById(id: number): Promise<Book | null>;
    create(data: Prisma.BookCreateInput): Promise<Book>;
    update(id: number, data: Prisma.BookUpdateInput): Promise<Book>;
    softDelete(id: number): Promise<Book>;
}
export declare class BookRepository implements IBookRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    list(skip: number, take: number, where: Prisma.BookWhereInput, orderBy: Prisma.BookOrderByWithRelationInput): Promise<Book[]>;
    countAll(where: Prisma.BookWhereInput): Promise<number>;
    findById(id: number): Promise<Book | null>;
    create(data: Prisma.BookCreateInput): Promise<Book>;
    update(id: number, data: Prisma.BookUpdateInput): Promise<Book>;
    softDelete(id: number): Promise<Book>;
}
//# sourceMappingURL=book.repository.d.ts.map