import type { PrismaClient, User } from "../generated";
export interface IUserRepository {
    findById(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    softDelete(id: number): Promise<User>;
}
export declare class UserRepository implements IUserRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findById(id: number): import("../generated").Prisma.Prisma__UserClient<({
        profile: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            gender: string;
            address: string;
            profile_picture_url: string | null;
        } | null;
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        email: string;
        username: string | null;
        password_hash: string;
        role: string | null;
    }) | null, null, import("../generated/runtime/client").DefaultArgs, import("../generated").Prisma.PrismaClientOptions>;
    findByEmail(email: string): import("../generated").Prisma.Prisma__UserClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        email: string;
        username: string | null;
        password_hash: string;
        role: string | null;
    } | null, null, import("../generated/runtime/client").DefaultArgs, import("../generated").Prisma.PrismaClientOptions>;
    findAll(): import("../generated").Prisma.PrismaPromise<({
        profile: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            gender: string;
            address: string;
            profile_picture_url: string | null;
        } | null;
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        email: string;
        username: string | null;
        password_hash: string;
        role: string | null;
    })[]>;
    softDelete(id: number): import("../generated").Prisma.Prisma__UserClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        email: string;
        username: string | null;
        password_hash: string;
        role: string | null;
    }, never, import("../generated/runtime/client").DefaultArgs, import("../generated").Prisma.PrismaClientOptions>;
}
//# sourceMappingURL=user.repository.d.ts.map