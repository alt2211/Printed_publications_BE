import { Router, Response, Request } from 'express';
import { Book } from '../models/Book'; 
import db from './db';
import { authenticateToken } from './auth.middleware';

const router = Router();


router.post('/addBook', authenticateToken, (req: Request, res: Response) => {
  const {
    id_user, author, title, date, city, description, quantity, lbc, udc, ISBN, publication_type 
  }: Book = req.body;

  const bookData: Book = {
    id_user, author, title, date, city, description, quantity, lbc, udc, ISBN, publication_type,
  };
  db.query('INSERT INTO book SET ?', [bookData], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Ошибка добавления книги' });
    } else {
      const insertedBookId = results.insertId;
      res.json({ message: 'Книга успешно добавлена', bookId: insertedBookId });
    }
  });
});

export default router;
