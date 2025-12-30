import type { IUserRepository } from "../repository/user.repository.js";
export interface IUserService {
    getMe(userId: number): Promise<any>;
    listUsers(): Promise<any[]>;
    deleteUser(id: string): Promise<any>;
}
export declare class UserServices implements IUserService {
    private userRepo;
    constructor(userRepo: IUserRepository);
    getMe(userId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        email: string;
        username: string | null;
        password_hash: string;
        role: string | null;
    }>;
    listUsers(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        email: string;
        username: string | null;
        password_hash: string;
        role: string | null;
    }[]>;
    deleteUser(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        email: string;
        username: string | null;
        password_hash: string;
        role: string | null;
    }>;
}
//# sourceMappingURL=user.services.d.ts.map
