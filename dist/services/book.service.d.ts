import type { Book } from "../generated";
import type { IBookRepository } from "../repository/book.repository.js";
interface FindAllBookParams {
    page: number;
    limit: number;
    search?: {
        title?: string;
        author?: string;
    };
    filters?: {
        inStock?: boolean;
        yearFrom?: number;
        yearTo?: number;
    };
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}
export interface BookListResponse {
    books: Book[];
    total: number;
    totalPages: number;
    currentPage: number;
}
export interface IBookService {
    list(params: FindAllBookParams): Promise<BookListResponse>;
    getById(id: string): Promise<Book>;
    create(data: {
        title: string;
        author: string;
        stock: number;
        cover?: string;
    }): Promise<Book>;
    update(id: string, data: Partial<Book>): Promise<Book>;
    delete(id: string): Promise<Book>;
}
export declare class BookServices implements IBookService {
    private bookRepo;
    constructor(bookRepo: IBookRepository);
    list(params: FindAllBookParams): Promise<BookListResponse>;
    getById(id: string): Promise<Book>;
    create(data: {
        title: string;
        author: string;
        stock: number;
        cover?: string;
    }): Promise<Book>;
    update(id: string, data: Partial<Book>): Promise<Book>;
    delete(id: string): Promise<Book>;
}
export {};
//# sourceMappingURL=book.service.d.ts.map
