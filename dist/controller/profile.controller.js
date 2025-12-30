import { successResponse } from "../utils/response.js";
export class ProfileController {
    profileService;
    constructor(profileService) {
        this.profileService = profileService;
    }
    me = async (req, res) => {
        const profile = await this.profileService.getMyProfile(req.user.id);
        successResponse(res, "Profile saya", profile);
    };
    update = async (req, res) => {
        const profile = await this.profileService.upsertProfile(req.user.id, req.body);
        successResponse(res, "Profile diperbarui", profile);
    };
}
//# sourceMappingURL=profile.controller.js.map
