import { Router } from "express";
import { AdminService } from "../services/admin.service.js";
import { AdminController } from "../controller/admin.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/admin.middleware.js";
import prismaInstance from "../database.js";
const router = Router();
const adminService = new AdminService(prismaInstance);
const adminController = new AdminController(adminService);
/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin Dashboard & Statistik
 */
/**
 * @swagger
 * /api/admin/stats:
 *   get:
 *     summary: Ambil statistik admin
 *     description: |
 *       Endpoint khusus ADMIN untuk melihat:
 *       - Total buku tersedia
 *       - Total peminjaman aktif
 *       - Buku paling populer
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Statistik berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     totalBooksAvailable:
 *                       type: number
 *                     activeBorrows:
 *                       type: number
 *                     mostPopularBook:
 *                       type: object
 *                       nullable: true
 *                       properties:
 *                         id:
 *                           type: number
 *                         title:
 *                           type: string
 *       401:
 *         description: Token tidak valid / tidak ada
 *       403:
 *         description: Akses khusus ADMIN
 */
router.get("/stats", authenticate, adminOnly, adminController.stats);
export default router;
//# sourceMappingURL=admin.routes.js.map
