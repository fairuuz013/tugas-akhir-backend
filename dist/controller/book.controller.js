import { successResponse } from "../utils/response.js";
export class BookController {
    bookService;
    constructor(bookService) {
        this.bookService = bookService;
        this.list = this.list.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }
    async list(req, res) {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const filters = {};
        if (req.query.inStock !== undefined) {
            filters.inStock = req.query.inStock === "true";
        }
        const yearFrom = Number(req.query.yearFrom);
        if (!isNaN(yearFrom)) {
            filters.yearFrom = yearFrom;
        }
        const yearTo = Number(req.query.yearTo);
        if (!isNaN(yearTo)) {
            filters.yearTo = yearTo;
        }
        const result = await this.bookService.list({
            page,
            limit,
            search: {
                title: req.query.title,
                author: req.query.author
            },
            filters,
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
        });
        successResponse(res, "Book berhasil diambil", result.books, {
            page: result.currentPage,
            limit,
            total: result.total
        });
    }
    async getById(req, res) {
        const book = await this.bookService.getById(req.params.id);
        successResponse(res, "Book berhasil diambil", book, null, 201);
    }
    async create(req, res) {
        const book = await this.bookService.create(req.body);
        successResponse(res, "Book berhasil ditambahkan", book, null, 201);
    }
    async update(req, res) {
        const book = await this.bookService.update(req.params.id, req.body);
        successResponse(res, "Book berhasil diupdate", book);
    }
    async remove(req, res) {
        const book = await this.bookService.delete(req.params.id);
        successResponse(res, "Book berhasil dihapus", book);
    }
}
//# sourceMappingURL=book.controller.js.map
