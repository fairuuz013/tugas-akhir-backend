declare const router: import("express-serve-static-core").Router;
/**
 * @swagger
 * /api/borrows:
 *   get:
 *     summary: List semua peminjaman (Admin)
 *     description: Admin dapat melihat dan memfilter data peminjaman
 *     tags: [Borrow]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [BORROWED, RETURNED]
 *       - in: query
 *         name: memberName
 *         schema:
 *           type: string
 *           example: fairuuz
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: Data peminjaman berhasil diambil
 *       403:
 *         description: Akses khusus ADMIN
 *       401:
 *         description: Unauthorized
 */
export default router;
//# sourceMappingURL=borrow.route.d.ts.map