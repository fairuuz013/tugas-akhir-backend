export class BorrowRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list(skip, take, where, orderBy) {
        return this.prisma.borrowRecord.findMany({
            skip,
            take,
            where,
            orderBy,
            include: {
                items: {
                    include: { book: true }
                },
                user: true
            }
        });
    }
    async countAll(where) {
        return this.prisma.borrowRecord.count({ where });
    }
    async findById(id) {
        return this.prisma.borrowRecord.findUnique({
            where: { id },
            include: {
                items: { include: { book: true } },
                user: true
            }
        });
    }
    async createBorrowRecord(data) {
        return this.prisma.borrowRecord.create({ data });
    }
    async createBorrowItems(data) {
        await this.prisma.borrowItem.createMany({ data });
    }
    async updateBookStock(bookId, stock) {
        return this.prisma.book.update({
            where: { id: bookId, deletedAt: null },
            data: { stock }
        });
    }
    async updateStatus(id, status) {
        return this.prisma.borrowRecord.update({
            where: { id },
            data: { status }
        });
    }
}
//# sourceMappingURL=borrow.repository.js.map