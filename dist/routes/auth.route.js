import { Router } from "express";
import { AuthRepository } from "../repository/auth.repository.js";
import { AuthService } from "../services/auth.service.js";
import { AuthController } from "../controller/auth.controller.js";
import prismaInstance from "../database.js";
const router = Router();
const authRepo = new AuthRepository(prismaInstance);
const authService = new AuthService(authRepo);
const authController = new AuthController(authService);
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: API untuk autentikasi pengguna
 */
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register user baru
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: fairuuz
 *               email:
 *                 type: string
 *                 example: fairuuz@mail.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       201:
 *         description: Register berhasil
 *       400:
 *         description: Email sudah terdaftar
 */
router.post("/register", authController.register);
router.post("/login", authController.login);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Login berhasil
 *       401:
 *         description: Email atau password salah
 */
export default router;
//# sourceMappingURL=auth.route.js.map
