import { Router, Request, Response } from 'express';
import {FakeBdd} from '../../dataService/fakeBdd';
import { BookController } from '../../controllers/bookController';

const bookController = new BookController;
const router = Router();
const database = new FakeBdd();

// Book a flight
router.post('/', (req: Request, res: Response) => {
    const { flightId, userId, date, bags } = req.body;
    res.json({ message: 'flight booked', book: { flightId, userId, date, bags } });
  });

//get all books
router.get('/books/', (req: Request, res: Response) => {
    res.json({ message: 'List of books' });
});
// Get book for a user
router.get('/book/:userId', (req: Request, res: Response) => {
    const { userId } = req.body
    res.json({ message: 'List of books for a user', book: { userId } });
});
// Delete a book
router.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.body;
    res.json({ message: 'flight booked', book: { id } });
  });
export default router;