import { Router, Response, Request } from 'express';
import db from '../functions/db';
import { authenticateToken } from './auth.middleware';

const router = Router();

router.post('/deleteAllBooks', authenticateToken,  async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
      await db.query('DELETE FROM book WHERE id_user = ?', [id]);
      return res.status(200).json({ message: 'Все книги успешно удалены' });
  } catch (error) {
    console.error('Ошибка при удалении книг:', error);
    return res.status(500).json({ error: 'Ошибка при удалении книг' });
  }
});

export default router;