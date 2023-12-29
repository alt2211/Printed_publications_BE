import { Router, Response, Request } from 'express';
import db from '../functions/db';
import { authenticateToken } from './auth.middleware';

const router = Router();

router.post('/deleteAccount', authenticateToken, async (req: Request, res: Response) => {
  const { userId } = req.body;
  
  try {
      await db.query('DELETE FROM user WHERE id = ?', [userId]);
      return res.status(200).json({ message: 'Аккаунт успешно удален' });
  } catch (error) {
    console.error('Ошибка при удалении аккаунта:', error);
    return res.status(500).json({ message: 'Ошибка при удалении аккаунта' });
  }
});

export default router;