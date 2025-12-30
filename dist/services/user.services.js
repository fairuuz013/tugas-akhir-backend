export class UserServices {
    userRepo;
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async getMe(userId) {
        const user = await this.userRepo.findById(userId);
        if (!user)
            throw new Error("User tidak ditemukan");
        return user;
    }
    async listUsers() {
        return this.userRepo.findAll();
    }
    async deleteUser(id) {
        return this.userRepo.softDelete(Number(id));
    }
}
//# sourceMappingURL=user.services.js.map