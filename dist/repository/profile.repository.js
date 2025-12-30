export class ProfileRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findByUserId(userId) {
        return this.prisma.profile.findUnique({
            where: { userId }
        });
    }
    create(data) {
        return this.prisma.profile.create({ data });
    }
    update(userId, data) {
        return this.prisma.profile.update({
            where: { userId },
            data
        });
    }
}
//# sourceMappingURL=profile.repository.js.map