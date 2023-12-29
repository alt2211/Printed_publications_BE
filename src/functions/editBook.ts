import { Router, Response, Request } from 'express';
import { Book } from '../models/Book'; // Импортируем модель книги
import db from './db';
import { authenticateToken } from './auth.middleware';

const router = Router();


router.post('/editBook',authenticateToken, (req: Request, res: Response) => {
  const {id, author, title, date, city, description, quantity, lbc, udc, ISBN, publication_type }: Book = req.body;

  const bookData: Book = {
    author,
    title,
    date,
    city,
    description,
    quantity,
    lbc,
    udc,
    ISBN,
    publication_type,
  };

  db.query('UPDATE book SET ? WHERE id = ?', [bookData, id], (err, results) => {
    if (err) {
      console.error('Ошибка изменения:', err);
      res.status(500).json({ error: 'Ошибка изменения' });
    } else {
      const insertedBookId = results.insertId;
      res.json({ message: 'Поле изменено', bookId: insertedBookId });
    }
  });
});

export default router;
