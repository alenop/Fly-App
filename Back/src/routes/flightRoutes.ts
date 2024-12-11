import { Router, Request, Response } from 'express';
import { MainController } from '../../controllers/mainController';
import { Flight } from '../../models/Flight';
import { FlightController } from '../../controllers/flightController'
const router = Router();
const flightController = new FlightController;

router.get('/',async (req: Request, res: Response) => {
    res.json({ message: 'list of flights', flight:await flightController.getAllFlights() });
  });

  export default router;
