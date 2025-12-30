export class BookServices {
    bookRepo;
    constructor(bookRepo) {
        this.bookRepo = bookRepo;
    }
    async list(params) {
        const { page, limit, search, filters, sortBy, sortOrder } = params;
        const skip = (page - 1) * limit;
        const where = {
            deletedAt: null
        };
        // 🔍 search
        if (search?.title) {
            where.title = { contains: search.title, mode: "insensitive" };
        }
        if (search?.author) {
            where.author = { contains: search.author, mode: "insensitive" };
        }
        if (filters?.inStock) {
            where.stock = { gt: 0 };
        }
        if (filters?.yearFrom || filters?.yearTo) {
            where.publishedYear = {};
            if (filters.yearFrom !== undefined) {
                where.publishedYear.gte = filters.yearFrom;
            }
            if (filters.yearTo !== undefined) {
                where.publishedYear.lte = filters.yearTo;
            }
        }
        const orderBy = sortBy
            ? { [sortBy]: sortOrder || "desc" }
            : { createdAt: "desc" };
        const books = await this.bookRepo.list(skip, limit, where, orderBy);
        const total = await this.bookRepo.countAll(where);
        return {
            books,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page
        };
    }
    async getById(id) {
        const book = await this.bookRepo.findById(Number(id));
        if (!book) {
            throw new Error("Book tidak ditemukan");
        }
        return book;
    }
    async create(data) {
        return this.bookRepo.create(data);
    }
    async update(id, data) {
        return this.bookRepo.update(Number(id), data);
    }
    async delete(id) {
        const book = await this.bookRepo.findById(Number(id));
        if (!book) {
            throw new Error("Book tidak ditemukan atau sudah dihapus");
        }
        return this.bookRepo.softDelete(Number(id));
    }
}
//# sourceMappingURL=book.service.js.map