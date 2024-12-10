import { Router, Request, Response } from 'express';
import { BookController } from '../../controllers/bookController';
import { Book } from '../../models/Book';

const bookController = new BookController;
const router = Router();

// Book a flight
router.post('/', (req: Request, res: Response) => {
    const { flightId, userId, date, bags,billets } = req.body;
    bookController.bookFlight(new Book(flightId,userId,date,bags),100,billets);//TODO calculate price
    res.json({ message: 'flight booked', book: { flightId, userId, date, bags } });
  });

//get all books
router.get('/books/', (req: Request, res: Response) => {
    res.json({ message: bookController.getAllBooks() });
});
// Get book for a user
router.get('/book/:userId', (req: Request, res: Response) => {
    const { userId } = req.body
    res.json({ message: 'List of books for a user', book: { userId } });
});
// Delete a book
router.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.body;
    res.json({ message: 'flight book cancelled', book: { id } });
  });
export default router;