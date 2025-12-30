import type { IProfileRepository } from "../repository/profile.repository.js";
export interface IProfileService {
    upsertProfile(userId: number, data: any): Promise<any>;
    getMyProfile(userId: number): Promise<any>;
}
export declare class ProfileServices implements IProfileService {
    private profileRepo;
    constructor(profileRepo: IProfileRepository);
    getMyProfile(userId: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        gender: string;
        address: string;
        profile_picture_url: string | null;
    } | null>;
    upsertProfile(userId: number, data: any): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        gender: string;
        address: string;
        profile_picture_url: string | null;
    }>;
}
//# sourceMappingURL=profile.service.d.ts.map
