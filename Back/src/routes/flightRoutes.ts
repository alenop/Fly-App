import { Router, Request, Response } from 'express';
import { MainController } from '../../controllers/mainController';
import { Flight } from '../../models/Flight';
import { FlightController } from '../../controllers/flightController'
const router = Router();
const flightController = new FlightController;

router.get('/flights', (req: Request, res: Response) => {
    res.json({ message: 'Users yeah', users:flightController.getAllFlights() });
  });