import type { IAuthRepository } from "../repository/auth.repository.js";
export declare class AuthService {
    private authRepo;
    constructor(authRepo: IAuthRepository);
    register(data: {
        username: string;
        email: string;
        password: string;
    }): Promise<any>;
    login(email: string, password: string): Promise<{
        token: string;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map
