export class UserRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findById(id) {
        return this.prisma.user.findUnique({
            where: { id, deletedAt: null },
            include: { profile: true }
        });
    }
    findByEmail(email) {
        return this.prisma.user.findUnique({
            where: { email }
        });
    }
    findAll() {
        return this.prisma.user.findMany({
            where: { deletedAt: null },
            include: { profile: true }
        });
    }
    softDelete(id) {
        return this.prisma.user.update({
            where: { id },
            data: { deletedAt: new Date() }
        });
    }
}
//# sourceMappingURL=user.repository.js.map