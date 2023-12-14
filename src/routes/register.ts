import { Router, Response, Request } from 'express';
import { User } from '../models/User';
import db from '../functions/db';
import * as jwt from 'jsonwebtoken';
import config from 'config';

const router = Router();

router.post('/register', (req: Request, res: Response) => {
    const { username, password }: User = req.body;
  
    const user: User = { username, password };
  
    db.query('INSERT INTO users SET ?', user, (err) => {
      if (err) {
        console.error('Ошибка регистрации:', err);
        res.status(500).json({ message: 'Ошибка регистрации' });
      } else {
        res.json({ message: 'Пользователь успешно зарегистрирован' });
      }
    });
  });
  
  export default router;