import { Router, Request, Response } from 'express';
import { MainController } from '../../controllers/mainController';
import { AirportController } from '../../controllers/airportController'
const router = Router();
const airportController = new AirportController;

router.get('/', async (req: Request, res: Response) => {
    res.json({ message: 'list of airport', airports:await airportController.getAllAirports() });
  });

  router.get('/id/:airport', async (req: Request, res: Response) => {
    const airport = parseInt(req.params.airport);
    res.json({ message: 'airport by id', airportId:await airportController.getAirportById(airport) });
  });

  export default router;