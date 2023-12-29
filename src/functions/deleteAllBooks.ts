import { Router, Response, Request } from 'express';
import db from '../functions/db';
import * as jwt from 'jsonwebtoken';
import config from 'config';
import { authenticateToken } from './auth.middleware';

const router = Router();

router.post('/deleteAllBooks', authenticateToken,  async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
      await db.query('DELETE FROM book WHERE id_user = ?', [id]);
      return res.status(200).json({ message: 'Книга успешно удалена' });
  } catch (error) {
    console.error('Ошибка при удалении книги:', error);
    return res.status(500).json({ message: 'Ошибка при удалении книги' });
  }
});

export default router;