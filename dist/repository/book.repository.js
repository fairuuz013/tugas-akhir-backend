;
export class BookRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    ;
    async list(skip, take, where, orderBy) {
        return this.prisma.book.findMany({
            skip,
            take,
            where,
            orderBy
        });
    }
    ;
    async countAll(where) {
        return this.prisma.book.count({ where });
    }
    ;
    async findById(id) {
        return this.prisma.book.findUnique({
            where: { id, deletedAt: null }
        });
    }
    ;
    async create(data) {
        return this.prisma.book.create({ data });
    }
    ;
    async update(id, data) {
        return this.prisma.book.update({
            where: { id, deletedAt: null },
            data
        });
    }
    ;
    async softDelete(id) {
        return this.prisma.book.update({
            where: { id, deletedAt: null },
            data: { deletedAt: new Date() }
        });
    }
}
//# sourceMappingURL=book.repository.js.map