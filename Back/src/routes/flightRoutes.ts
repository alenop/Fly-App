import { Router, Request, Response } from 'express';
import { MainController } from '../../controllers/mainController';
const router = Router();
const mainController = new MainController;

router.get('/',async (req: Request, res: Response) => {
    res.json({ message: 'list of flights', flights:await mainController.getAllFlights() });
  });

  export default router;
