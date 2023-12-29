import { Router, Response, Request } from 'express';
import db from '../functions/db';
import { authenticateToken } from './auth.middleware';

const router = Router();

router.post('/changeEmail', authenticateToken, async (req: Request, res: Response) => {
  const { userId, newEmail } = req.body;
  try 
  {
    await db.query('UPDATE user SET email = ? WHERE id = ?', [newEmail, userId]);
    return res.status(200).json({ message: 'Почта успешно изменена' });
  } 
  catch (error) 
  {
    return res.status(500).json({ error: 'Ошибка при изменении почты' });
  }
});

export default router;