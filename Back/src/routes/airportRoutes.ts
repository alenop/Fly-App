import { Router, Request, Response } from 'express';
import { MainController } from '../../controllers/mainController';
import { AirportController } from '../../controllers/airportController'
const router = Router();
const airportController = new AirportController;

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'list of airport', airports:airportController.getAllAirports() });
  });

  router.get('/id/:airport', (req: Request, res: Response) => {
    const airport = req.params.airport
    res.json({ message: 'airport by id', airportId:airportController.getAirportById(Number(airport)) });
  });

  export default router;