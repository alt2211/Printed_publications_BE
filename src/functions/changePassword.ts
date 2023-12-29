import { Router, Response, Request } from 'express';
import db from '../functions/db';
import { authenticateToken } from './auth.middleware';

const router = Router();

router.post('/changePassword', authenticateToken, async (req: Request, res: Response) => {
  const { userId, newPassword } = req.body;

  try {
      await db.query('UPDATE user SET password = ? WHERE id = ?', [newPassword, userId]);
      return res.status(200).json({ message: 'Пароль успешно изменен' });
  } catch (error) {
    console.error('Ошибка при изменении пароля:', error);
    return res.status(500).json({ error: 'Ошибка при изменении пароля' });
  }
});

export default router;
