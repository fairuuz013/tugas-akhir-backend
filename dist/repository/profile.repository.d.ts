import type { Prisma, PrismaClient, Profile } from "../generated";
export interface IProfileRepository {
    findByUserId(userId: number): Promise<Profile | null>;
    create(data: Prisma.ProfileCreateInput): Promise<Profile>;
    update(userId: number, data: Prisma.ProfileUpdateInput): Promise<Profile>;
}
export declare class ProfileRepository implements IProfileRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByUserId(userId: number): Prisma.Prisma__ProfileClient<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        gender: string;
        address: string;
        profile_picture_url: string | null;
    } | null, null, import("../generated/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    create(data: Prisma.ProfileCreateInput): Prisma.Prisma__ProfileClient<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        gender: string;
        address: string;
        profile_picture_url: string | null;
    }, never, import("../generated/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    update(userId: number, data: Prisma.ProfileUpdateInput): Prisma.Prisma__ProfileClient<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        gender: string;
        address: string;
        profile_picture_url: string | null;
    }, never, import("../generated/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
}
//# sourceMappingURL=profile.repository.d.ts.map