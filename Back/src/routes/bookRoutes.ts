import { Router, Request, Response } from 'express';
import { MainController } from '../../controllers/mainController';
import { Book } from '../../models/Book';

const mainController = new MainController;
const router = Router();

// Book a flight
router.post('/', async (req: Request, res: Response) => {
    const { flightId, userId, date, bags,billets } = req.body;
    await mainController.bookFlight(new Book(flightId,userId,date,bags,[]),billets);
    res.json({ message: 'flight booked', book: { flightId, userId, date, bags } });
  });

//get all books
router.get('/books/', (req: Request, res: Response) => {
    res.json({ message: mainController.getBookController().getAllBooks() });
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