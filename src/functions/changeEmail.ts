import { Router, Response, Request } from 'express';
import db from '../functions/db';
import * as jwt from 'jsonwebtoken';
import config from 'config';
import { authenticateToken } from './auth.middleware';

const router = Router();

router.post('/changeEmail', authenticateToken,  async (req: Request, res: Response) => {
  const { userId, newEmail } = req.body;

  try {
    const userResult = await db.query('SELECT * FROM user WHERE id = ?', [userId]);
    if (userResult.values?.length === 1) {
      await db.query('UPDATE user SET email = ? WHERE id = ?', [newEmail, userId]);

      return res.status(200).json({ message: 'Почта успешно изменена' });
    } else {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }
  } catch (error) {
    console.error('Ошибка при изменении почты:', error);
    return res.status(500).json({ message: 'Ошибка при изменении почты' });
  }
});

export default router;