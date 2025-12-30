export class ProfileServices {
    profileRepo;
    constructor(profileRepo) {
        this.profileRepo = profileRepo;
    }
    async getMyProfile(userId) {
        return this.profileRepo.findByUserId(userId);
    }
    async upsertProfile(userId, data) {
        const profile = await this.profileRepo.findByUserId(userId);
        if (profile) {
            return this.profileRepo.update(userId, data);
        }
        return this.profileRepo.create({
            ...data,
            user: { connect: { id: userId } }
        });
    }
}
//# sourceMappingURL=profile.service.js.map